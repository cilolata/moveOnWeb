import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardProduct from '../../../components/Card';

import { Container } from './styles';

function Esteiras() {
    const eliptios = useSelector((state) =>
        state.anuncios.anuncios.map((a) => a)
    );

    const filter = eliptios.filter((f) => f.nome === 'esteira');

    return (
        <Container>
            <h2 className="pt-4">Esteiras</h2>
            <div className="container_meusAnuncios">
                {filter.map((e) => (
                    <Link to={`/aparelho/${e.id}`} key={e.id} className="m-3">
                        <CardProduct
                            nome={e.nome}
                            foto={e.foto.url}
                            descricao={e.descricao}
                        />
                    </Link>
                ))}
            </div>
        </Container>
    );
}

export default Esteiras;
