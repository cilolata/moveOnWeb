import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../Pages/Home';
import DashboardCliente from '../Pages/Dashboard/DashboardCliente';
import DashboardEmpresa from '../Pages/Dashboard/DashboardEmpresa';
import CadastroInicial from '../Pages/CadastroInicial';
import ProfileCliente from '../Pages/Profile/ProfileCliente';
import ProfileEmpresa from '../Pages/Profile/ProfileEmpresa';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cadastro" component={CadastroInicial} />
            <Route path="/profile/:name" component={ProfileCliente} />
            <Route path="/profileempresa/:name" component={ProfileEmpresa} />
            <Route
                path="/dashboardcliente"
                component={DashboardCliente}
                isPrivate
            />
            <Route
                path="/dashboardempresa"
                component={DashboardEmpresa}
                isPrivate
            />
        </Switch>
    );
}
