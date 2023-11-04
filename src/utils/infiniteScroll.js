import getData from "./getData"

function isScrollAtBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

let currentPage = 1
let isLoading = false;

const handleInfiniteScroll = async (characters) => {

    if (isScrollAtBottom() && !isLoading) {

        isLoading = true;
        currentPage += 1

        try {
            const moreCharacters = await getData(null, currentPage);

            if (!moreCharacters || !moreCharacters.results) {
                return
            }

            characters.results = [...characters.results, ...moreCharacters.results]

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

            document.getElementById('characters').innerHTML = view

        } catch (error) {
            console.error(error)
        } finally {
            isLoading = false
        }
    }
}


export default handleInfiniteScroll