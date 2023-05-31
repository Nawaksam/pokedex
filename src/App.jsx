import { useState } from "react"
import "./App.css"
import PokemonCard from "./components/PokemonCard.jsx"

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Ivysaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    name: "Venusaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  },
]

function App() {
  const [count, setCount] = useState(0)
  const next = () => {
    if (count < pokemonList.length - 1) {
      setCount(count + 1)
    } else {
      alert(`T'es à la fin gros`)
    }
  }
  const previous = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      alert(`T'es au début gros`)
    }
  }

  return (
    <>
      <h1>Attrapez-les tous !</h1>
      <p>...</p>
      <PokemonCard pokemon={pokemonList[count]} />
      <div className="container-button">
        <button onClick={previous}>Précédent</button>
        <button onClick={next}>Suivant</button>
      </div>
    </>
  )
}

export default App
