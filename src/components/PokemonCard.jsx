import "./PokemonCard.css"

const Card = () => {
  return (
    <>
      <div className="pokemon-card">
        <figure>
          <img
            className="pokemon-avatar"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            alt="Image aléatoire"
          />
          <figcaption>Bulbasaur</figcaption>
        </figure>
      </div>
    </>
  )
}

export default Card
