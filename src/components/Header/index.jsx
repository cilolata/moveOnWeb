/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Auth from '../Auth';
import HeaderLogado from '../HeaderLogado';

import { HeaderContainer } from './style';

const Header = () => {
    const logado = useSelector((state) => state.auth.signed);

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
                        MoveOn
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                    className="d-lg-flex justify-content-end"
                    id="responsive-navbar-nav"
                >
                    <Form inline className="mx-auto d-none d-lg-block col-lg-6">
                        <FormControl
                            size="sm"
                            type="text"
                            placeholder="Pesquisar"
                            className="w-75"
                        />
                        <Button
                            size="sm"
                            className="button__search ml-2 "
                            type="submit"
                        >
                            Pesquisar
                        </Button>
                    </Form>
                    <Nav className="my-auto ">
                        {logado ? <HeaderLogado /> : <Auth />}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </HeaderContainer>
    );
};

export default Header;
