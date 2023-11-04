import handleInfiniteScroll from "../utils/infiniteScroll";

const Characters = async (characters) => {

    window.addEventListener('scroll', () => handleInfiniteScroll(characters))

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

    return view
}

export default Characters