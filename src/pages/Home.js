import getData from "../utils/getData"
import Characters from './Characters'

const Home = async () => {
  const characters = await getData(null, 1)

  const view = `
        <article id="characters-container">
          <div class="characters" id="characters">
            ${await Characters(characters)}
          </div>
        </article>
    `
  return view
}

export default Home 