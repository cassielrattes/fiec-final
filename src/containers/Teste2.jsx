import React, { Component } from "react";

class Teste2 extends Component {
  state = {
    bicicletas: [
      {
        id: 1,
        marca: "caloi",
        descricao: "perdi na av. ário no dia 6/9/18",
        imagem:
          "https://imgcentauro-a.akamaihd.net/900x900/88144102/mountain-bike-caloi-extreme-aro-29-freio-a-disco-cambios-shimano-21-marchas-img.jpg"
      },
      {
        id: 2,
        marca: "jna",
        descricao: "perdi na rua 13 de maio no dia 14/9/18",
        imagem:
          "https://img.clasf.com.br/2018/07/01/Bicicleta-JNA-Cross-aro-20-20180701142525.1730470015.jpg"
      }
    ]
  };

  alertar(descricao) {
    alert(descricao);
  }

  removerBike = id => {
    const oi = this.state.bicicletas.filter(bicicleta => bicicleta.id !== id);
    console.log(oi);
  };

  render() {
    return (
      <div>
        <div className="container">
          {this.state.bicicletas.map(bicicleta => (
            <div key={bicicleta.id}>
              <h2>{bicicleta.marca}</h2>
              <img width="30%" src={bicicleta.imagem} alt="bicicleta" />
              <br />
              <button onClick={descricao => this.alertar(bicicleta.descricao)}>
                Mostrar Descricao
              </button>
              <button onClick={id => this.removerBike(bicicleta.id)}>
                Remover Bike
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Teste2;
