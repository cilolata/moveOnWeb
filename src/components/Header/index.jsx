import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../Auth';

import { HeaderContainer } from './style';

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
                </ul>
            </nav>
            <Auth />
        </HeaderContainer>
    );
};

export default Header;
