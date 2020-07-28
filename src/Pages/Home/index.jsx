/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Footer from '../../components/Footer';

import { MainHome, Container, Categorias, NovosAparelhos } from './style';

import product1 from '../../assets/product1.jpg';
import product3 from '../../assets/product3.jpg';
import product5 from '../../assets/product5.jpg';
import product6 from '../../assets/product6.jpg';

function Home(props) {
    const logado = useSelector((state) => state.auth.signed);

    return (
        <>
            <MainHome>
                {!logado ? (
                    <>
                        <Container>
                            <div className="d-flex flex-column justify-content-center h-75 ml-3">
                                <h1>Exercite-se sem sair de casa</h1>
                                <Link to="/cadastro">Cadastre-se</Link>
                            </div>
                        </Container>
                        <Categorias>
                            <h4>Categorias em destaque</h4>
                            <div className="categorias__container">
                                <div className="categorias__destaque">
                                    <img src={product1} alt="" />
                                    <p>Elipticos</p>
                                </div>
                                <div className="categorias__destaque">
                                    <img src={product3} alt="" />
                                    <p>Estações</p>
                                </div>
                                <div className="categorias__destaque">
                                    <img src={product5} alt="" />
                                    <p>Esteiras</p>
                                </div>
                                <div className="categorias__destaque">
                                    <img src={product6} alt="" />
                                    <p>Pesos</p>
                                </div>
                            </div>
                        </Categorias>
                        <NovosAparelhos>
                            {props.aparelho.map((a) => (
                                <Card
                                    key={a.id}
                                    style={{ width: '12rem', margin: '0 3%' }}
                                >
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
                        </NovosAparelhos>
                    </>
                ) : (
                    <>
                        <Categorias>
                            <h4>Categorias em destaque</h4>
                            <div className="categorias__container">
                                <div className="categorias__destaque">
                                    <img src={product1} alt="" />
                                    <p>Elipticos</p>
                                </div>
                                <div className="categorias__destaque">
                                    <img src={product3} alt="" />
                                    <p>Estações</p>
                                </div>
                                <div className="categorias__destaque">
                                    <img src={product5} alt="" />
                                    <p>Esteiras</p>
                                </div>
                                <div className="categorias__destaque">
                                    <img src={product6} alt="" />
                                    <p>Pesos</p>
                                </div>
                            </div>
                        </Categorias>
                        <NovosAparelhos>
                            {props.aparelho.map((a) => (
                                <Card
                                    key={a.id}
                                    style={{ width: '12rem', margin: '2% 3%' }}
                                >
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
                        </NovosAparelhos>
                    </>
                )}
            </MainHome>
            <Footer />
        </>
    );
}

export default Home;
