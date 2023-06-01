import { useState } from "react"
import "./App.css"
import PokemonCard from "./components/PokemonCard.jsx"
import NavBar from "./components/NavBar"

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

  // prettier-ignore
  return (
    <>
      <h1>Attrapez-les tous !</h1>
      <p>...</p>
      <PokemonCard pokemon={pokemonList[count]} />
      <NavBar count={count} setCount={setCount} list={pokemonList}/>
    </>
  )
}

export default App
