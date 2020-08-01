import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Container } from './styles';

function Aparelho() {
    const { id } = useParams();
    const aparelhos = useSelector((state) =>
        state.anuncios.anuncios.filter((a) => a.id === id)
    );

    return (
        <Container>
            <h2 className="pt-4">Acessórios</h2>
            <div className="container_meusAnuncios">
                {/* {aparelhos.filter((f) => {
                    return f.id === id;
                    <Card style={{ width: '12rem', margin: '3% 3%' }}>
                        <Card.Img
                            variant="top"
                            className="card__img"
                            src={f.foto.url}
                        />
                        <Card.Body className="p-1 mx-auto">
                            <Card.Title>{f.nome}</Card.Title>
                            <Card.Text>{f.descricao}</Card.Text>
                            <Button>Go somewhere</Button>
                        </Card.Body>
                    </Card>;
                })} */}
            </div>
        </Container>
    );
}

export default Aparelho;
