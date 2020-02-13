import React from "react";

const Button = props => {
  return (
    <button style={{ color: props.cor, backgroundColor: props.fundo }}>
      {props.children}
    </button>
  );
};

export default Button;
