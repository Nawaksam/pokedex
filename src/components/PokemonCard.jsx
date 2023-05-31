import "./PokemonCard.css"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
]

const pokemon = pokemonList[0]

const isSrc = (item) => {
  if (item.imgSrc) {
    return <img className="pokemon-avatar" src={item.imgSrc} alt={item.name} />
  } else {
    return <p>???</p>
  }
}

const PokemonCard = () => {
  return (
    <>
      <div className="pokemon-card">
        <figure>
          {isSrc(pokemon)}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
    </>
  )
}

export default PokemonCard
