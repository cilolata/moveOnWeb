import React from 'react';
import "./Header.css";
import "../../Global.css";



function Header(){
    return(
        <header>
        <div className="header__container">
            <div className="header__container--brand">
            <div className="header__name--brand">MoveOn</div>
            </div>
           <nav className="header__nav">
               <ul className="header__ul">
                <li className="header__li"><a href="">Produtos</a></li>
                <li className="header__li"><a href="">Empresas</a></li>
                <li className="header__li"><a href="">Alugar</a></li>
                <li className="header__li"><a href="">Cadastrar</a></li>
               </ul>
           </nav>
           <div className="header__button--container">
           <button className="btn__header">Entrar</button> 
           </div>
        </div>
        <div className="header__heading">
            <h1>Lorem ipsum dolor sit amet</h1>
            <input className="header__register" type="button" value="Try Free"/>
        </div>
        </header>
    )
}

export default Header;