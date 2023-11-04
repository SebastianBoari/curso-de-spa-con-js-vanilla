import handleInfiniteScroll from "../utils/infiniteScroll";

const Characters = async (characters) => {

    window.addEventListener('scroll', () => handleInfiniteScroll(characters))

    const view = `
        ${characters.results.map(character => `
        <div class="card">
            <div class="card_header">
                <img class="card_header-image" src="${character.image}" alrt="${character.name}">
            </div>

            <div class="card_footer">
                <h2 class="card_footer-name">${character.name}</h2>
                
                <p class="card_footer-location">${character.location.name}</p>
                
                <a class="card_footer-button" href="#/${character.id}/">
                    View more
                </a>
            </div>
        </div>
        `).join('')}
    `

    return view
}

export default Characters