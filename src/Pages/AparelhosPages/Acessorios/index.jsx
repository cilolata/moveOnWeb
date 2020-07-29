import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Container } from './styles';

function Acessorios() {
    const eliptios = useSelector((state) =>
        state.anuncios.anuncios.map((a) => a)
    );

    const filter = eliptios.filter((f) => f.nome === 'acessorios');

    return (
        <Container>
            <h2 className="pt-4">Acessórios</h2>
            <div className="container_meusAnuncios">
                {filter.map((a) => (
                    <Card style={{ width: '12rem', margin: '3% 3%' }}>
                        <Card.Img
                            variant="top"
                            className="card__img"
                            src={a.foto.url}
                        />
                        <Card.Body className="p-1 mx-auto">
                            <Card.Title>{a.nome}</Card.Title>
                            <Card.Text>{a.descricao}</Card.Text>
                            <Button>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
}

export default Acessorios;
