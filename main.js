(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/?name=rick",t=async(t,a)=>{let e;t||a?t?e=`https://rickandmortyapi.com/api/character/${t}`:a&&(e=`${n}&page=${a}`):e=n;try{const n=await fetch(e,{method:"GET"});return await n.json()}catch(n){console.log("Fetch error:",n)}};let a=1,e=!1;const r=async n=>(window.addEventListener("scroll",(()=>(async n=>{if(window.innerHeight+window.scrollY>=document.body.offsetHeight&&!e){e=!0,a+=1;try{const e=await t(null,a);if(!e||!e.results)return;n.results=[...n.results,...e.results];const r=`\n            ${n.results.map((n=>`\n            <div class="card">\n                <div class="card_header">\n                    <img class="card_header-image" src="${n.image}" alrt="${n.name}">\n                </div>\n    \n                <div class="card_footer">\n                    <h2 class="card_footer-name">${n.name}</h2>\n                    \n                    <p class="card_footer-location">${n.location.name}</p>\n                    \n                    <a class="card_footer-button" href="#/${n.id}/">\n                        View more\n                    </a>\n                </div>\n            </div>\n            `)).join("")}\n            `;document.getElementById("characters").innerHTML=r}catch(n){console.error(n)}finally{e=!1}}})(n))),`\n        ${n.results.map((n=>`\n        <div class="card">\n            <div class="card_header">\n                <img class="card_header-image" src="${n.image}" alrt="${n.name}">\n            </div>\n\n            <div class="card_footer">\n                <h2 class="card_footer-name">${n.name}</h2>\n                \n                <p class="card_footer-location">${n.location.name}</p>\n                \n                <a class="card_footer-button" href="#/${n.id}/">\n                    View more\n                </a>\n            </div>\n        </div>\n        `)).join("")}\n    `),i=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",s=()=>'\n        <div class="error404-container">\n            <div class="error404">\n                <h2>Error 404</h2>\n                <p>Not Found</p>\n            </div>\n        </div>\n    ',c={"/":async()=>{const n=await t(null,1);return`\n        <article id="characters-container">\n          <div class="characters" id="characters">\n            ${await r(n)}\n          </div>\n        </article>\n    `},"/:id":async()=>{const n=i(),a=await t(n);return window.removeEventListener("scroll",null),`\n        <article class="character-container">\n            <div class="character-info">\n                <div class="character-card">\n                    <img src="${a.image}" alt="${a.name}">\n                    <h2>${a.name}</h2>\n                </div>\n                \n                <table class="character-table">\n                    <tr>\n                        <td>Episodios:</td>\n                        <td>${a.episode.length}</td>\n                    </tr>\n                    <tr>\n                        <td>Status:</td>\n                        <td>${a.status}</td>\n                    </tr>\n                    <tr>\n                        <td>Species:</td>\n                        <td>${a.species}</td>\n                    </tr>\n                    <tr>\n                        <td>Gender:</td>\n                        <td>${a.gender}</td>\n                    </tr>\n                    <tr>\n                        <td>Origin:</td>\n                        <td>${a.origin.name}</td>\n                    </tr>\n                    <tr>\n                        <td>Last location:</td>\n                        <td>${a.location.name}</td>\n                    </tr>\n                </table>\n            </div>\n        </article>\n    `},"/content":"Content"},d=async()=>{const n=document.getElementById("header"),t=document.getElementById("content");n.innerHTML=await'\n        <div class="header">\n            <div class="header_brand">\n                <a href="https://sebastianboari.github.io/curso-de-spa-con-js-vanilla/" class="header_brand-link">\n                    \n  <svg width="128" height="40" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="128" height="39" fill="#007CBE"/>\n<path d="M36.712 25.608L33.088 39H28.552L26.44 30.312L24.256 39H19.744L16.096 25.608H20.2L22.096 35.184L24.352 25.608H28.696L30.976 35.136L32.848 25.608H36.712ZM40.3411 24.216C39.6211 24.216 39.0291 24.008 38.5651 23.592C38.1171 23.16 37.8931 22.632 37.8931 22.008C37.8931 21.368 38.1171 20.84 38.5651 20.424C39.0291 19.992 39.6211 19.776 40.3411 19.776C41.0451 19.776 41.6211 19.992 42.0691 20.424C42.5331 20.84 42.7651 21.368 42.7651 22.008C42.7651 22.632 42.5331 23.16 42.0691 23.592C41.6211 24.008 41.0451 24.216 40.3411 24.216ZM42.3811 25.608V39H38.2771V25.608H42.3811ZM44.5392 32.304C44.5392 30.912 44.8192 29.696 45.3792 28.656C45.9552 27.616 46.7472 26.816 47.7552 26.256C48.7792 25.696 49.9472 25.416 51.2592 25.416C52.9392 25.416 54.3392 25.856 55.4592 26.736C56.5952 27.616 57.3392 28.856 57.6912 30.456H53.3232C52.9552 29.432 52.2432 28.92 51.1872 28.92C50.4352 28.92 49.8352 29.216 49.3872 29.808C48.9392 30.384 48.7152 31.216 48.7152 32.304C48.7152 33.392 48.9392 34.232 49.3872 34.824C49.8352 35.4 50.4352 35.688 51.1872 35.688C52.2432 35.688 52.9552 35.176 53.3232 34.152H57.6912C57.3392 35.72 56.5952 36.952 55.4592 37.848C54.3232 38.744 52.9232 39.192 51.2592 39.192C49.9472 39.192 48.7792 38.912 47.7552 38.352C46.7472 37.792 45.9552 36.992 45.3792 35.952C44.8192 34.912 44.5392 33.696 44.5392 32.304ZM68.0704 39L63.9904 33.384V39H59.8864V21.24H63.9904V31.056L68.0464 25.608H73.1104L67.5424 32.328L73.1584 39H68.0704ZM76.7864 24.216C76.0664 24.216 75.4744 24.008 75.0104 23.592C74.5624 23.16 74.3384 22.632 74.3384 22.008C74.3384 21.368 74.5624 20.84 75.0104 20.424C75.4744 19.992 76.0664 19.776 76.7864 19.776C77.4904 19.776 78.0664 19.992 78.5144 20.424C78.9784 20.84 79.2104 21.368 79.2104 22.008C79.2104 22.632 78.9784 23.16 78.5144 23.592C78.0664 24.008 77.4904 24.216 76.7864 24.216ZM78.8264 25.608V39H74.7224V25.608H78.8264ZM85.9045 27.84C86.3845 27.104 86.9845 26.528 87.7045 26.112C88.4245 25.68 89.2245 25.464 90.1045 25.464V29.808H88.9765C87.9525 29.808 87.1845 30.032 86.6725 30.48C86.1605 30.912 85.9045 31.68 85.9045 32.784V39H81.8005V25.608H85.9045V27.84ZM94.1301 24.216C93.4101 24.216 92.8181 24.008 92.3541 23.592C91.9061 23.16 91.6821 22.632 91.6821 22.008C91.6821 21.368 91.9061 20.84 92.3541 20.424C92.8181 19.992 93.4101 19.776 94.1301 19.776C94.8341 19.776 95.4101 19.992 95.8581 20.424C96.3221 20.84 96.5541 21.368 96.5541 22.008C96.5541 22.632 96.3221 23.16 95.8581 23.592C95.4101 24.008 94.8341 24.216 94.1301 24.216ZM96.1701 25.608V39H92.0661V25.608H96.1701ZM98.3283 32.304C98.3283 30.912 98.6083 29.696 99.1683 28.656C99.7443 27.616 100.536 26.816 101.544 26.256C102.568 25.696 103.736 25.416 105.048 25.416C106.728 25.416 108.128 25.856 109.248 26.736C110.384 27.616 111.128 28.856 111.48 30.456H107.112C106.744 29.432 106.032 28.92 104.976 28.92C104.224 28.92 103.624 29.216 103.176 29.808C102.728 30.384 102.504 31.216 102.504 32.304C102.504 33.392 102.728 34.232 103.176 34.824C103.624 35.4 104.224 35.688 104.976 35.688C106.032 35.688 106.744 35.176 107.112 34.152H111.48C111.128 35.72 110.384 36.952 109.248 37.848C108.112 38.744 106.712 39.192 105.048 39.192C103.736 39.192 102.568 38.912 101.544 38.352C100.536 37.792 99.7443 36.992 99.1683 35.952C98.6083 34.912 98.3283 33.696 98.3283 32.304ZM121.86 39L117.78 33.384V39H113.676V21.24H117.78V31.056L121.836 25.608H126.9L121.332 32.328L126.948 39H121.86Z" fill="#EBEBEB"/>\n</svg>\n\n  \n                </a>\n            </div>\n\n            <ul class="header_nav">\n                <li class="header_nav-item">\n                    <a class="item_link" href="https://sebastianboari.github.io/curso-de-spa-con-js-vanilla/">\n                        \n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 18"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"/></svg>\n  \n                    </a>\n                </li>\n                \n                <li class="header_nav-item">\n                    <a class="item_link" href="https://github.com/SebastianBoari">\n                        \n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 18"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg> \n    \n                    </a>\n                </li>\n\n                <li class="header_nav-item">\n                    <a class="item_link" href="#/about/">\n                        \n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 18"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="M11 17h2v-6h-2v6Zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>\n  \n    \n                    </a>\n                </li>\n            </ul>\n        </div>\n    ';let a=i(),e=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(a),r=c[e]?c[e]:s;t.innerHTML=await r()};window.addEventListener("load",d),window.addEventListener("hashchange",d)})();