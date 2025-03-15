import Curso from "./Curso"

function Cuadricula(){
    return(
        <div className="main-content">
            <Curso 
                titulo="Procesamiento de datos en Java con Streams y Lambdas"
                subtitulo="Aprende a optimizar y manipular datos en Java utilizando Expresiones Lambda y Streams para reducir el código innecesario."
                imagen="https://edteam-media.s3.amazonaws.com/courses/medium/77d55f84-a996-4941-a67c-3c62c0b269be.png"
                />
        </div>
    )
}

export default Cuadricula;
