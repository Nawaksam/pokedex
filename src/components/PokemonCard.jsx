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

const PokemonEmpty = () => {
  return (
    <>
      <div className="pokemon-card">
        <figure>
          <p>???</p>
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
    </>
  )
}
const Pokemon = () => {
  return (
    <>
      <div className="pokemon-card">
        <figure>
          <img
            className="pokemon-avatar"
            src={pokemon.imgSrc}
            alt={pokemon.name}
          />
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
    </>
  )
}

const PokemonCard = () => {
  if (pokemon.imgSrc) {
    return <Pokemon />
  } else {
    return <PokemonEmpty />
  }
}
export default PokemonCard
