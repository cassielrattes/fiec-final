import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  Button /*CardText, 
  CardTitle, CardSubtitle,*/
} from "reactstrap";

const Fusca = props => {
  return (
    <div className="container">
      <Card>
        <CardImg top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
          <Button onClick={() => alert(props.descricao)}>Mostrar</Button>
          <Button onClick={props.remove}>Deletar</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Fusca;
