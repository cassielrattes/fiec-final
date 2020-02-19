import React from 'react'
import { Button } from 'reactstrap'

const Header = (props) => {
    const nome = props.nome.toUpperCase();
    return (
    <header>
        {nome} Legal 
        <Button color="primary" className="mr-2">Test Primário</Button>
        <br />
    </header>
    )
}

export default Header;

