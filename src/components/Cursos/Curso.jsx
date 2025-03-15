// useRef nos permite crear una refeerencia hacia el elemento del Dom

import { useRef } from "react"
import "./Curso.css"

const Curso= ({titulo, imagen, subtitulo}) =>{

  const miReferencia = useRef()

  function desactivarImagen ()  {
    miReferencia.current.classList.add("desactivada")
  }

  return(
      <div>
        <img ref={miReferencia} src={imagen} alt={titulo}/>
        <h2>{titulo}</h2>
        <p>{subtitulo}</p>
        <button onClick={desactivarImagen}>Desactivar</button>
      </div>
  )
}

export default Curso

//props es un objeto que tiene titulo subtitulo y imagen