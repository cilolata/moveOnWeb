/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import CardProduct from '../../components/Card';

import { MeusAnuncios, Container } from './style';

function Dashboard() {
    const aparelhos = useSelector((state) => state.anuncios.anuncios);
    const empresaLoad = useSelector((state) => state.getEmpresa.id);

    // eslint-disable-next-line no-undef
    const filterAp = aparelhos.filter((ap) => ap.empresa_id == empresaLoad);

    return (
        <Container>
            <MeusAnuncios>
                <h2>Meus Anúncios</h2>
                <div className="container__meusAnuncios">
                    {filterAp.map((e) => (
                        <CardProduct
                            key={e.id}
                            nome={e.nome}
                            foto={e.foto.url}
                            valorDiaria={e.valor_diaria}
                        />
                    ))}
                </div>
            </MeusAnuncios>
        </Container>
    );
}

export default Dashboard;
