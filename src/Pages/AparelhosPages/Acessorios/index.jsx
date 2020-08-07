import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardProduct from '../../../components/Card';

import { Container } from './styles';

function Acessorios() {
    const eliptios = useSelector((state) =>
        state.anuncios.anuncios.map((b) => b)
    );

    const filter = eliptios.filter((f) => f.nome === 'acessorios');

    return (
        <Container>
            <h2 className="pt-4">Acessórios</h2>
            <div className="container_meusAnuncios">
                {filter.map((e) => (
                    <Link
                        to={`/aparelho/${e.id}`}
                        key={e.id}
                        className="m-3 text-decoration-none text-dark"
                    >
                        <CardProduct
                            nome={e.nome}
                            foto={e.foto.url}
                            descricao={e.descricao}
                            valorDiaria={e.valor_diaria}
                        />
                    </Link>
                ))}
            </div>
        </Container>
    );
}

export default Acessorios;
