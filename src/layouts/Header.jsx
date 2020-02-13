import React from "react";

const Header = props => {
  const name = props.name.toUpperCase();
  return (
    <>
      <h1>{name} Legal</h1>
    </>
  );
};

export default Header;
