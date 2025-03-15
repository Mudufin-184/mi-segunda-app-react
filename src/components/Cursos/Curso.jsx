const Curso= ({titulo, imagen, subtitulo}) =>{
    return(
        <div>
          <img src={imagen} alt={titulo}/>
          <h2>{titulo}</h2>
          <p>{subtitulo}</p>
        </div>
    )
}

export default Curso

//props es un objeto que tiene titulo subtitulo y imagen