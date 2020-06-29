import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';



const Header = () =>{
    return(
        <>
            <div className="header__container">
                <div className="header__container--brand"> 
                    <div className="header__name--brand">
                        <Link to="/" style={{textDecoration: "none", color:"#fff"}}>
                            MoveOn
                        </Link>
                    </div>
                </div>
                <nav className="header__nav">
                    <ul className="header__ul">
                        <li className="header__li"><a href="">Produtos</a></li>
                        <li className="header__li"><a href="">Empresas</a></li>
                        <li className="header__li"><a href="">Alugar</a></li>
                        <li className="header__li"><Link to="/cadastro">Cadastrar</Link></li>    
                    </ul>
                </nav>
                <div className="header__button--container">
                   <Link to="/Login"> <button className="btn__header">Entrar</button></Link>
                </div>
            </div>     
        </>
    )
}

export default Header;