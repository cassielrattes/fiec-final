import React, { Component } from 'react'
import Button from '../layout/Button';

class Teste extends Component {
    state = {
        contador: 0
    }

    incrementaEstado = () => {
        const contador = this.state.contador + 1;
        this.setState({contador});
    }

    render() {
        return (
            <div>
                <Button click={this.incrementaEstado} >
                    Incrementa Contador
                </Button>
                {this.state.contador}

                {/* <Button cor="white" fundo="green" >
                   Incrementa Contador
                </Button> */}

            </div>
        )
    }
}

export default Teste
