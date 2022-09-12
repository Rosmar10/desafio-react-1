import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const Cards = ({imagen, title, text}) => {
return(
    <div className="conteiner">
        <div>
        <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={imagen}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{Text}</Card.Text>
                </Card.Body>
                <Button variant="info">Ver Mas</Button>
            </Card>
        </div>
    </div>
)
}
export default Cards;