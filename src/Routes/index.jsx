import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../Pages/Home';
import DashboardCliente from '../Pages/Dashboard/DashboardCliente';
import CadastroInicial from '../Pages/CadastroInicial';
import ProfileCliente from '../Pages/Profile/ProfileCliente';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cadastro" component={CadastroInicial} />
            <Route path="/profile/:id" component={ProfileCliente} isPrivate />
            <Route
                path="/dashboard"
                component={DashboardCliente}
                isPrivate
            />
        </Switch>
    );
}
