/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Container } from './styles';

function CardProduct(props) {
    const { nome, foto, valorDiaria } = props;
    return (
        <Container>
            <Card
                style={{
                    width: '15rem',
                    margin: '5px',
                }}
            >
                <Card.Img variant="top" className="card__img" src={foto} />
                <Card.Body className="p-4">
                    <Card.Title>{nome}</Card.Title>
                    <Card.Text className="card__text">
                        valor diária: R${valorDiaria}
                    </Card.Text>
                    <Button className="w-100">Alugar</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default CardProduct;
