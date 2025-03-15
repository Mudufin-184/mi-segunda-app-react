import { Component } from "react";

class Calculadora extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numero1: 0,
            numero2: 0
        };

        this.setNumber1 = this.setNumber1.bind(this);
        this.setNumber2 = this.setNumber2.bind(this);
    }

    setNumber1(e) {  
        this.setState({ numero1: Number(e.target.value) });
    }

    setNumber2(e) {
        this.setState({ numero2: Number(e.target.value) });
    }

    render() {
        return (
            <>
                <form>
                    <h2>{this.props.nombre}</h2>
                    <div>
                        <input 
                            type="number" 
                            name="numero1" 
                            value={this.state.numero1}
                            onChange={this.setNumber1} 
                        />

                        <input 
                            type="number" 
                            name="numero2" 
                            value={this.state.numero2}
                            onChange={this.setNumber2}
                        />
                    </div>
                </form>
                
                <span> Resultado: {this.state.numero1 + this.state.numero2} </span>
            </>
        );
    }


    //tercer paso del ciclo de vida
    componentDidMount(){

    }

    //Cuarto paso del ciclo de vida 
    componentWillUnmount(){

    }
}

export default Calculadora;

//Componentes Stateful
//Componentes statesful