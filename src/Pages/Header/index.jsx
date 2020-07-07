import React from 'react';
import { Link } from 'react-router-dom';

import '../Dashboard';
import Auth from '../Auth';

// eslint-disable-next-line import/extensions
import { HeaderContainer } from './style.jsx';

const Header = () => {
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
                    <li className="header__li">
                        <Link to="/cadastro">Cadastrar</Link>
                    </li>
                </ul>
            </nav>
            <Auth />
        </HeaderContainer>
    );
};

export default Header;
