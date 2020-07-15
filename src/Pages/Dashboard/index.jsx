import React from 'react';

// eslint-disable-next-line import/extensions
import { ContainerDashboard } from './style';
import product1 from '../../assets/product1.jpg';
import product3 from '../../assets/product3.jpg';
import product4 from '../../assets/product4.jpg';
import product5 from '../../assets/product5.jpg';
import product6 from '../../assets/product6.jpg';
import product8 from '../../assets/product8.jpg';

function Dashboard() {
    return (
        <ContainerDashboard>
            <h1>Categorias em destaque</h1>
            <div className="categorias">
                <div className="categorias__destaque">
                    <img src={product1} alt="" />
                    <h3>Elipticos</h3>
                </div>
                <div className="categorias__destaque">
                    <img src={product8} alt="" />
                    <h3>Acessórios</h3>
                </div>
                <div className="categorias__destaque">
                    <img src={product3} alt="" />
                    <h3>Estações</h3>
                </div>
                <div className="categorias__destaque">
                    <img src={product4} alt="" />
                    <h3>Roupas</h3>
                </div>
                <div className="categorias__destaque">
                    <img src={product5} alt="" />
                    <h3>Esteiras</h3>
                </div>
                <div className="categorias__destaque">
                    <img src={product6} alt="" />
                    <h3>Pesos</h3>
                </div>
            </div>
        </ContainerDashboard>
    );
}

export default Dashboard;
