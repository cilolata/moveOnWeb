import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import DashboardRoute from './DashboardRoute';
import CadastroInicial from '../Pages/CadastroInicial';
import Aparelho from '../Pages/Aparelho';
import ProfileCliente from '../Pages/Profile/ProfileCliente';
import Eliptios from '../Pages/AparelhosPages/Eliptios';
import Esteiras from '../Pages/AparelhosPages/Esteiras';
import Bicicletas from '../Pages/AparelhosPages/Bicicletas';
import Acessorios from '../Pages/AparelhosPages/Acessorios';
import HomeRoute from './HomeRoute';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={HomeRoute} />
            <Route path="/cadastro" component={CadastroInicial} />
            <Route path="/profile/:id" component={ProfileCliente} isPrivate />
            <Route
                path="/dashboard/:name"
                component={DashboardRoute}
                isPrivate
            />
            <Route path="/eliptios" component={Eliptios} />
            <Route path="/esteiras" component={Esteiras} />
            <Route path="/bicicletas" component={Bicicletas} />
            <Route path="/acessorios" component={Acessorios} />
            <Route path="/aparelho/:id" component={Aparelho} />
        </Switch>
    );
}
