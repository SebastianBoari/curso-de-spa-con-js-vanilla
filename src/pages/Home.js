import getData from "../utils/getData"
import Characters from './Characters'

const Home = async () => {
    const characters = await getData(null, 1)

    const view = `
        <div class="Characters" id="characters-container">
          ${await Characters(characters)}
        </div>
    `
    return view
}

export default Home 