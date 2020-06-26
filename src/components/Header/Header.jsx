import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Cadastro from '../Cadastro/Cadastro';
import MainHome from '../MainHome/MainHome';

const Header = () =>{
    const [isClick, setIsClick]= useState(false);
    console.log(isClick)

    const handleClickCadastro = event =>{
        setIsClick(true)
    }

    return(
        <>
        <header>
        <div className="header__container">
            <div className="header__container--brand"> 
            <div className="header__name--brand">
            <Link 
            to="/"
            style={{textDecoration: "none", color:"#fff"}}
            >
                MoveOn
            </Link>
            </div>
            </div>
           <nav className="header__nav">
               <ul className="header__ul">
                <li className="header__li"><a href="">Produtos</a></li>
                <li className="header__li"><a href="">Empresas</a></li>
                <li className="header__li"><a href="">Alugar</a></li>
                <li className="header__li"><Link to="/cadastro" onClick={handleClickCadastro}>Cadastrar</Link></li>    
               </ul>
           </nav>
           <div className="header__button--container">
           <button className="btn__header">Entrar</button> 
           </div>
        </div>     
        </header>
        <main>
            {isClick ?
            <Cadastro />
            : <MainHome/>
            }
        </main>
        </>
    )
}

export default Header;