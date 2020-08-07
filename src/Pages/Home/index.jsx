/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

import Carousel from '../../components/Carousel';

import { MainHome, Container, Categorias } from './style';

import product1 from '../../assets/product1.jpg';
import product3 from '../../assets/product3.jpg';
import product5 from '../../assets/product5.jpg';
import product6 from '../../assets/product6.jpg';

function Home() {
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
                            <h4 className="pt-3">Categorias em destaque</h4>
                            <div className="categorias__container">
                                <div className="categorias__destaque">
                                    <Link
                                        to="/eliptios"
                                        className="text-reset d-flex flex-column align-items-center text-decoration-none"
                                    >
                                        <img src={product1} alt="" />
                                        <p>Eliptios</p>
                                    </Link>
                                </div>
                                <div className="categorias__destaque">
                                    <Link
                                        to="/bicicletas"
                                        className="text-reset d-flex flex-column align-items-center text-decoration-none"
                                    >
                                        <img src={product3} alt="" />
                                        <p>Bicicletas</p>
                                    </Link>
                                </div>
                                <div className="categorias__destaque">
                                    <Link
                                        to="/esteiras"
                                        className="text-reset d-flex flex-column align-items-center text-decoration-none"
                                    >
                                        <img src={product5} alt="" />
                                        <p>Esteiras</p>
                                    </Link>
                                </div>
                                <div className="categorias__destaque">
                                    <Link
                                        to="/acessorios"
                                        className="text-reset d-flex flex-column align-items-center text-decoration-none"
                                    >
                                        <img src={product6} alt="" />
                                        <p>Acessórios</p>
                                    </Link>
                                </div>
                            </div>
                        </Categorias>
                        <Carousel />
                    </>
                ) : (
                    <>
                        <Categorias className="h-25">
                            <h4 className="pt-3 pb-3">
                                Categorias em destaque
                            </h4>
                            <div className="categorias__container">
                                <div className="categorias__destaque">
                                    <Link
                                        to="/eliptios"
                                        className="text-reset d-flex flex-column align-items-center text-decoration-none"
                                    >
                                        <img src={product1} alt="" />
                                        <p>Elipticos</p>
                                    </Link>
                                </div>
                                <div className="categorias__destaque">
                                    <Link
                                        to="/bicicletas"
                                        className="text-reset d-flex flex-column align-items-center text-decoration-none"
                                    >
                                        <img src={product3} alt="" />
                                        <p>Bicicletas</p>
                                    </Link>
                                </div>
                                <div className="categorias__destaque">
                                    <Link
                                        to="/esteiras"
                                        className="text-reset d-flex flex-column align-items-center text-decoration-none"
                                    >
                                        <img src={product5} alt="" />
                                        <p>Esteiras</p>
                                    </Link>
                                </div>
                                <div className="categorias__destaque">
                                    <Link
                                        to="/acessorios"
                                        className="text-reset d-flex flex-column align-items-center text-decoration-none"
                                    >
                                        <img src={product6} alt="" />
                                        <p>Acessórios</p>
                                    </Link>
                                </div>
                            </div>
                        </Categorias>
                        <Carousel className="h-50" />
                    </>
                )}
            </MainHome>
            <Footer />
        </>
    );
}

export default Home;
