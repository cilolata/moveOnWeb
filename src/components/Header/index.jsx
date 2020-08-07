/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Auth from '../Auth';
import HeaderLogado from '../HeaderLogado';
import ModalSearch from '../ModalSearch';

import { HeaderContainer } from './style';

const Header = () => {
    const logado = useSelector((state) => state.auth.signed);
    const aparelhos = useSelector((state) => state.anuncios.anuncios);
    const [search, setSearch] = useState([]);

    const handleChange = (event) => {
        const findProduct = aparelhos.filter((product) =>
            product.nome
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
        );
        setSearch(findProduct);
    };

    return (
        <HeaderContainer>
            <Navbar
                className="p-4"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Navbar.Brand className="ml-lg-5">
                    <Link
                        to="/"
                        style={{ textDecoration: 'none', color: '#fff' }}
                    >
                        Gímnica Magazine
                    </Link>
                </Navbar.Brand>
                <div className=" d-lg-block d-none w-75">
                    <div className="form__search">
                        <input
                            type="text"
                            className="w-50 pl-2 rounded mr-2"
                            placeholder="Pesquisar"
                            onChange={handleChange}
                        />
                        <ModalSearch search={search} />
                    </div>
                </div>
                <Nav className="my-auto ml-5">
                    {logado ? <HeaderLogado /> : <Auth />}
                </Nav>
            </Navbar>
        </HeaderContainer>
    );
};

export default Header;
