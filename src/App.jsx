import { useState } from "react"
import "./App.css"
import Card from "./components/PokemonCard.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Attrapez-les tous !</h1>
      <p>...</p>
      <Card />
    </>
  )
}

export default App
