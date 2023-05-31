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

  let isHiddenPrevious = true
  let isHiddenNext = false
  if (count > 0) {
    isHiddenPrevious = false
  }
  if (count === pokemonList.length - 1) {
    isHiddenNext = true
  }
  // prettier-ignore
  return (
    <>
      <h1>Attrapez-les tous !</h1>
      <p>...</p>
      <PokemonCard pokemon={pokemonList[count]} />
      <div className="container-button">
        {!isHiddenPrevious && (<button onClick={() => {setCount(count - 1)}}>Précédent</button>)}
        {!isHiddenNext && (<button onClick={() => {setCount(count + 1)}}>Suivant</button>)}
      </div>
    </>
  )
}

export default App
