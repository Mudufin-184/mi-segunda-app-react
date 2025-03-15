import Calculadora from "./Calculadora.jsx"
import Header from "./Header/Header.jsx"

function App(){
  return(
    <>
      <Header/>
      <main>
        <h1>Cursos EDTeam</h1>
        <Calculadora nombre="Formulario de Calculadora"/>
      </main>
    </>   
  )
}

export default App
