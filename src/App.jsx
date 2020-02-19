import React, { Component } from "react";
import Fusca from "./layout/Fusca";

export class App extends Component {
  state = {
    fuscas: [
      {
        img:
          "https://cdn-motorshow-ssl.akamaized.net/wp-content/uploads/sites/2/2019/09/vw-fusca-eletrico-5.jpg",
        descricao: " fusca em otimo estado "
      },
      {
        img: "https://i.ytimg.com/vi/bbRRXF4YQpM/hqdefault.jpg",
        descricao: " fusca em aa estado "
      }
    ]
  };

  deletar = i => {
    const fuscas = this.state.fuscas;
    console.log(i);
    fuscas.splice(i, 1);
    this.setState({ fuscas });
  };

  render() {
    return (
      <div>
        {this.state.fuscas.map((fusca, i) => (
          <Fusca
            key={i}
            img={fusca.img}
            descricao={fusca.descricao}
            remove={() => this.deletar(i)}
          />
        ))}
      </div>
    );
  }
}

export default App;
