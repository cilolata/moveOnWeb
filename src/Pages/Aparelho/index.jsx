/* eslint-disable eqeqeq */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
            {singleAp.map((e) => (
                <>
                    <div className="div__img">
                        <img src={e.foto.url} alt="" />
                    </div>
                    <div classnName="div__infos">
                        <h2>{e.nome}</h2>
                        <p>{e.descricao}</p>
                        <p>R$ {e.valor_diaria}</p>
                        <p>{e.peso}KG </p>
                    </div>
                </>
            ))}
        </Container>
    );
}

export default Aparelho;
