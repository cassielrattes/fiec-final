import React from "react";

const Main = () => {
  const lista = ["Bruno", "Cleito", "Joel", "Oia", "Cleber"];

  return (
    <div>
      {lista.map(nome => (
        <div>
          <li>{nome}</li>
        </div>
      ))}
    </div>
  );
};

export default Main;
