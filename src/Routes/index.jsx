import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import CadastroInicial from '../Pages/CadastroInicial';
import ProfileCliente from '../Pages/ProfileCliente';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro" component={CadastroInicial} />
            <Route exact path="/profilecliente" component={ProfileCliente} />
            <Route exact path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    );
}
