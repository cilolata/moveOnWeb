/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

function Anuncios({ nome, descricao, valor, foto, peso }) {
    return (
        <Container>
            <div className="meus__anuncios">
                <div className="card">
                    <img src={foto} />
                    <div className="card__container">
                        <h3>{nome}</h3>
                        <p className="price" />
                        {descricao}
                        <p className="price" />
                        {valor}
                        <p className="price" />
                        {peso}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Anuncios;
