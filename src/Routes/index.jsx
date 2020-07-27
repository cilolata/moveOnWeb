import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import DashboardRoute from './DashboardRoute';
import CadastroInicial from '../Pages/CadastroInicial';
import ProfileCliente from '../Pages/Profile/ProfileCliente';
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
        </Switch>
    );
}
