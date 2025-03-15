//UseState nos permite usar el estado de los componentes funcionales
import { useState, useEffect } from "react";

const Calculadora = (props) => {
    
    const [numeros,setNumeros] = useState({
        numero1: 0,
        numero2: 0
    })

    const [texto, setTexto]= useState("")

    //UseEffect se ejecuta cuando el componente va a ser construido
    //El segundo parametro es un array opcional 
    //el arry sera el listado de todos los estodos que quiero controlar como
    // disparadores de la funcion que escribi en el useEffect
    // sino le paso array como 2do parametro. El useEffect vuelve a correr siempre
    // que algun estado se actualize 
    useEffect(function() {
        console.log(new Date().getTime())
        return () => {
            // Aquí va todo lo que quieras ejecutar cuando el componente se desmonte
        }
    }, [numeros])

    const setNumber1 = (e) => {  
       setNumeros({
        ...numeros,
        numero1: e.target.value
       })
    }

    const setNumber2 = (e) => {
       setNumeros({
        ...numeros,
        numero2: e.target.value
       })
    }
  
    return (
        <>
        <h2>{props.nombre}</h2> 
            <form>                    
                <input 
                    type="number" 
                    name="numero1" 
                    value={numeros.numero1}
                    onChange={setNumber1} 
                />
                <input 
                    type="number" 
                    name="numero2" 
                    value={numeros.numero2}
                    onChange={setNumber2}
                />                
            </form>    
            <span> Resultado: {Number(numeros.numero1) + Number(numeros.numero2)} </span>
            <input type="text" onChange={(e)=> {setTexto(e.target.value)}}/>
            <span>{texto}</span>                 
        </>
    );
}

export default Calculadora;

//Componentes Stateful
//Componentes statesful