/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaInfo, FaShoppingCart, FaSearch, FaStar } from 'react-icons/fa';
import Footer from '../../components/Footer';
import Dashboard from '../Dashboard';

import { MainHome } from './style';

import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import product4 from '../../assets/product4.jpg';
import product5 from '../../assets/product5.jpg';
import product6 from '../../assets/product6.jpg';
import product7 from '../../assets/product7.jpg';
import product8 from '../../assets/product8.jpg';

function Home() {
    const logado = useSelector((state) => state.auth.signed);

    return (
        <>
            {!logado ? (
                <>
                    <MainHome>
                        <div className="hero">
                            <div className="hero__heading">
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <Link to="/cadastro">
                                    <button
                                        className="hero__register"
                                        type="button"
                                    >
                                        Cadastre-se
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <section className="price__table">
                            <div className="price__table-content">
                                <div className="price__table--img">
                                    <div className="price__table--text">
                                        <h3>New Products</h3>
                                        <h2>Sport Collection</h2>
                                        <p>
                                            Phasellus molestie magna non est
                                            bibendum non venenatis nisl tempor
                                            lorem ipsum dolor.
                                        </p>
                                        <a
                                            className="price__table--link"
                                            href="#"
                                        >
                                            <span>Shop Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="price__table-content">
                                <div className="price__table--img">
                                    <div className="price__table--text">
                                        <h3>New Products</h3>
                                        <h2>Sport Collection</h2>
                                        <p>
                                            Phasellus molestie magna non est
                                            bibendum non venenatis nisl tempor
                                            lorem ipsum dolor.
                                        </p>
                                        <a
                                            className="price__table--link"
                                            href="#"
                                        >
                                            <span>Shop Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="price__table-content">
                                <div className="price__table--img">
                                    <div className="price__table--text">
                                        <h3>New Products</h3>
                                        <h2>Sport Collection</h2>
                                        <p>
                                            Phasellus molestie magna non est
                                            bibendum non venenatis nisl tempor
                                            lorem ipsum dolor.
                                        </p>
                                        <a
                                            className="price__table--link"
                                            href="#"
                                        >
                                            <span>Shop Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="new__product">
                            <div className="title__name">
                                <h4>New Products</h4>
                            </div>
                            <div className="products__container">
                                <div className="product__wrapper">
                                    <div className="product__content">
                                        <div className="product__image">
                                            <a href="#">
                                                <img src={product1} alt="" />
                                            </a>
                                        </div>
                                        <div className="info__products">
                                            <div className="product__name">
                                                <a href="#">
                                                    Octane Deluxe Console
                                                </a>
                                            </div>
                                            <div className="price__box">
                                                <span className="special__price">
                                                    $200.60
                                                </span>
                                                <span className="old__price">
                                                    $227.96
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <FaInfo />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaShoppingCart />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaSearch />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaStar />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__wrapper">
                                    <div className="product__content">
                                        <div className="product__image">
                                            <a href="#">
                                                <img src={product2} alt="" />
                                            </a>
                                        </div>
                                        <div className="info__products">
                                            <div className="product__name">
                                                <a href="#">
                                                    Octane Deluxe Console
                                                </a>
                                            </div>
                                            <div className="price__box">
                                                <span className="special__price">
                                                    $200.60
                                                </span>
                                                <span className="old__price">
                                                    $227.96
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <FaInfo />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaShoppingCart />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaSearch />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaStar />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__wrapper">
                                    <div className="product__content">
                                        <div className="product__image">
                                            <a href="#">
                                                <img src={product3} alt="" />
                                            </a>
                                        </div>
                                        <div className="info__products">
                                            <div className="product__name">
                                                <a href="#">
                                                    Octane Deluxe Console
                                                </a>
                                            </div>
                                            <div className="price__box">
                                                <span className="special__price">
                                                    $200.60
                                                </span>
                                                <span className="old__price">
                                                    $227.96
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <FaInfo />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaShoppingCart />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaSearch />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaStar />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__wrapper">
                                    <div className="product__content">
                                        <div className="product__image">
                                            <a href="#">
                                                <img src={product4} alt="" />
                                            </a>
                                        </div>
                                        <div className="info__products">
                                            <div className="product__name">
                                                <a href="#">
                                                    Octane Deluxe Console
                                                </a>
                                            </div>
                                            <div className="price__box">
                                                <span className="special__price">
                                                    $200.60
                                                </span>
                                                <span className="old__price">
                                                    $227.96
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <FaInfo />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaShoppingCart />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaSearch />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaStar />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__wrapper">
                                    <div className="product__content">
                                        <div className="product__image">
                                            <a href="#">
                                                <img src={product5} alt="" />
                                            </a>
                                        </div>
                                        <div className="info__products">
                                            <div className="product__name">
                                                <a href="#">
                                                    Octane Deluxe Console
                                                </a>
                                            </div>
                                            <div className="price__box">
                                                <span className="special__price">
                                                    $200.60
                                                </span>
                                                <span className="old__price">
                                                    $227.96
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <FaInfo />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaShoppingCart />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaSearch />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaStar />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__wrapper">
                                    <div className="product__content">
                                        <div className="product__image">
                                            <a href="#">
                                                <img src={product6} alt="" />
                                            </a>
                                        </div>
                                        <div className="info__products">
                                            <div className="product__name">
                                                <a href="#">
                                                    Octane Deluxe Console
                                                </a>
                                            </div>
                                            <div className="price__box">
                                                <span className="special__price">
                                                    $200.60
                                                </span>
                                                <span className="old__price">
                                                    $227.96
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <FaInfo />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaShoppingCart />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaSearch />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaStar />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__wrapper">
                                    <div className="product__content">
                                        <div className="product__image">
                                            <a href="#">
                                                <img src={product7} alt="" />
                                            </a>
                                        </div>
                                        <div className="info__products">
                                            <div className="product__name">
                                                <a href="#">
                                                    Octane Deluxe Console
                                                </a>
                                            </div>
                                            <div className="price__box">
                                                <span className="special__price">
                                                    $200.60
                                                </span>
                                                <span className="old__price">
                                                    $227.96
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <FaInfo />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaShoppingCart />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaSearch />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaStar />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__wrapper">
                                    <div className="product__content">
                                        <div className="product__image">
                                            <a href="#">
                                                <img src={product8} alt="" />
                                            </a>
                                        </div>
                                        <div className="info__products">
                                            <div className="product__name">
                                                <a href="#">
                                                    Octane Deluxe Console
                                                </a>
                                            </div>
                                            <div className="price__box">
                                                <span className="special__price">
                                                    $200.60
                                                </span>
                                                <span className="old__price">
                                                    $227.96
                                                </span>
                                            </div>
                                            <div className="actions">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <FaInfo />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaShoppingCart />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaSearch />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FaStar />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </MainHome>
                    <Footer />
                </>
            ) : (
                <Dashboard />
            )}
        </>
    );
}

export default Home;
