import "./PokemonCard.css"

// prettier-ignore
const PokemonCard = ({pokemon}) => {
  return (
    <>
      <div className="pokemon-card">
        <figure>
          {pokemon.imgSrc? <img className="pokemon-avatar" src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
    </>
  )
}

export default PokemonCard
