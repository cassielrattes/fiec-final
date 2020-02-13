import React, { Component } from "react";
import Button from "../layouts/Button";

export class Teste extends Component {
  state = {
    contador: 0
  };

  incrementState = () => {
    const contador = this.state.contador + 1;
    this.setState({ contador });
  };

  render() {
    return (
      <div>
        <Button click={this.incrementState}>
          <h1>Botão</h1>
        </Button>
        <h1>{this.state.contador}</h1>
        {/* <Button cor="black" fundo="red">
          Contador
        </Button> */}
      </div>
    );
  }
}

export default Teste;
