import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Auth from '../Auth';
import HeaderLogado from '../HeaderLogado';

import { HeaderContainer } from './style';

const Header = () => {
    const logado = useSelector((state) => state.auth.signed);
    console.log(logado);

    return (
        <HeaderContainer>
            <div className="header__container--brand">
                <div className="header__name--brand">
                    <Link
                        to="/"
                        style={{ textDecoration: 'none', color: '#fff' }}
                    >
                        MoveOn
                    </Link>
                </div>
            </div>
            <nav className="header__nav">
                <ul className="header__ul">
                    <li className="header__li">
                        <Link to="/">Produtos</Link>
                    </li>
                    <li className="header__li">
                        <Link to="/">Empresas</Link>
                    </li>
                    <li className="header__li">
                        <Link to="/">Alugar</Link>
                    </li>
                </ul>
            </nav>
            {logado ? <HeaderLogado /> : <Auth />}
        </HeaderContainer>
    );
};

export default Header;
