import Calculadora from "./Calculadora.jsx"
import Header from "./Header/Header.jsx"
import Cuadricula from"./Cursos/Cuadricula.jsx"
function App(){
  return(
    <>
      <Header/>
      <main>
        <h1>Cursos EDTeam</h1>
        <Cuadricula/>
        <Cuadricula/>
        <Calculadora nombre="Formulario de Calculadora"/>
      </main>
    </>   
  )
}

export default App
