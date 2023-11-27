console.log('test')

const pokeDex = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await response.json()
    console.log(data)
    
    let name = data.name
    console.log(name)

    let type = data.types[0].type.name
    console.log(type)

    let sprite = data.sprites.front_default
    console.log(sprite)

    const showName = document.getElementById('name').innerHTML = `
    ${name}
    `
    const showType = document.getElementById('type').innerHTML = `
    ${type}
    `
    const showSprite = document.getElementById('sprite').innerHTML =`
    <img src= "${sprite}">
    `

    return data
}

// pokeDex('squirtle')


const search = async () => {
    const searchInput = document.getElementById('search')
    console.log('Search Input: ', searchInput) // should print the html form in the log
    const searchTerm = searchInput.value
    console.log('Search Term: ', searchTerm)

    if (!searchTerm) {
        return
    }

    try {
        const results = await pokeDex(searchTerm)
        console.log("Search Results: ", results)
        pokeDex(results)
    } catch (error){
        console.error('Cannot find this Pokemon', error)
    }

}

search()

const getPokedex = async (event) => {
    if (event) {
        event.preventDefault();
    }

    const pokeSearch = document.getElementById('search').value;
    try {
        await search(pokeSearch); // called pokedex first to insure working code. Have to call search for it to work
    } catch (error) {
        console.error('Error fetching Pokedex data:', error);
    }
};