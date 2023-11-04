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
                <article class="Character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alrt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
                `).join('')}
            `

            document.getElementById('characters-container').innerHTML = view

        } catch (error) {
            console.error(error)
        } finally {
            isLoading = false
        }
    }
}


export default handleInfiniteScroll