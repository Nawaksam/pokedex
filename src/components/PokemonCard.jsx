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

const ImgSource = () => {
  if (pokemon.imgSrc) {
    return (
      <img className="pokemon-avatar" src={pokemon.imgSrc} alt={pokemon.name} />
    )
  } else {
    return <p>???</p>
  }
}

const PokemonCard = () => {
  return (
    <>
      <div className="pokemon-card">
        <figure>
          <ImgSource />
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
    </>
  )
}

export default PokemonCard
