/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import CardProduct from '../Card';

import { Container, NovosAparelhos } from './styles';

function Carousel() {
    const aparelhos = useSelector((state) => state.anuncios.anuncios);

    const settings = {
        accessibility: true,
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Container>
            <div className="div__container">
                <Slider {...settings}>
                    {aparelhos.map((e) => (
                        <Link
                            to={`/aparelho/${e.id}`}
                            key={e.id}
                            className="text-decoration-none text-dark"
                        >
                            <NovosAparelhos>
                                <CardProduct
                                    nome={e.nome}
                                    foto={e.foto.url}
                                    descricao={e.descricao}
                                    valorDiaria={e.valor_diaria}
                                />
                            </NovosAparelhos>
                        </Link>
                    ))}
                </Slider>
            </div>
        </Container>
    );
}

export default Carousel;
