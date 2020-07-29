/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Container, NovosAparelhos } from './styles';

function Carousel(props) {
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
                    {props.aparelho.map((e) => (
                        <NovosAparelhos key={e.id}>
                            <Card
                                style={{
                                    width: '15rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Card.Img
                                    variant="top"
                                    className="card__img"
                                    src={e.foto.url}
                                />
                                <Card.Body className="p-1 mx-auto">
                                    <Card.Title>{e.nome}</Card.Title>
                                    <Card.Text>{e.descricao}</Card.Text>
                                    <Button>Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </NovosAparelhos>
                    ))}
                </Slider>
            </div>
        </Container>
    );
}

export default Carousel;
