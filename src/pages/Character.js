import getHash from '../utils/getHash'
import getData from '../utils/getData'

const Character = async () => {
    const id = getHash()
    const character = await getData(id)

    window.removeEventListener('scroll', null);

    const view = `
        <article class="character-container">
            <div class="character-info">
                <div class="character-card">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </div>
                
                <table class="character-table">
                    <tr>
                        <td>Episodios:</td>
                        <td>${character.episode.length}</td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>${character.status}</td>
                    </tr>
                    <tr>
                        <td>Species:</td>
                        <td>${character.species}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>${character.gender}</td>
                    </tr>
                    <tr>
                        <td>Origin:</td>
                        <td>${character.origin.name}</td>
                    </tr>
                    <tr>
                        <td>Last location:</td>
                        <td>${character.location.name}</td>
                    </tr>
                </table>
            </div>
        </article>
    `
    return view
}

export default Character