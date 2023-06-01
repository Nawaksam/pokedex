import "./NavBar.css"

const NavBar = ({ count, setCount, list }) => {
  // prettier-ignore
  return (
    <>
      <div className="container-button">
        {count > 0 && (<button onClick={() => {setCount(count - 1)}}>
            Précédent</button>)}
        {count < list.length - 1 && (<button onClick={() => {setCount(count + 1)}}>
            Suivant</button>)}
      </div>
    </>
  )
}
export default NavBar
