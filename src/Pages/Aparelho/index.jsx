/* eslint-disable eqeqeq */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardProduct from '../../components/Card';


import { Container } from './styles';

function Aparelho() {
    const { id } = useParams();
    const idProduct = id;
    const aparelhos = useSelector((state) =>
        state.anuncios.anuncios.filter((a) => a)
    );

    const singleAp = aparelhos.filter((ap) => ap.id == idProduct);

    return (
        <Container>
            <div className="container_meusAnuncios">
                {singleAp.map((e) => (
                    <CardProduct
                        nome={e.nome}
                        foto={e.foto.url}
                        descricao={e.descricao}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Aparelho;
