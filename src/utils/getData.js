const API = 'https://rickandmortyapi.com/api/character/?name=rick'

const getData = async (id, page) => {
    let apiURL

    if (!id && !page) {
        apiURL = API
    } else if (id) {
        apiURL = `https://rickandmortyapi.com/api/character/${id}`
    } else if (page) {
        apiURL = `${API}&page=${page}`
    }

    try {
        const response = await fetch(apiURL, {
            method: 'GET'
        });
        const data = await response.json()

        return data
    } catch (error) {
        console.log('Fetch error:', error)
    }
}

export default getData