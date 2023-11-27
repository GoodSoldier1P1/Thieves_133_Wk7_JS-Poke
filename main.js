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

pokeDex('squirtle')