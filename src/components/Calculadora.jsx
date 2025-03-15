import { useState } from "react";

const Calculadora = (props) => {
    
    const [state,setState] = useState({
        numero1: 0,
        numero2: 0
    })

    const setNumber1 = (e) => {  
       setState({
        ...state,
        numero1: e.target.value
       })
    }

    const setNumber2 = (e) => {
       setState({
        ...state,
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
                    value={state.numero1}
                    onChange={setNumber1} 
                />
                <input 
                    type="number" 
                    name="numero2" 
                    value={state.numero2}
                    onChange={setNumber2}
                />           
            </form>
            
            <span> Resultado: {Number(state.numero1) + Number(state.numero2)} </span>
        </>
    );
}

export default Calculadora;

//Componentes Stateful
//Componentes statesful