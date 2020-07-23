import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import CadastroInicial from '../Pages/CadastroInicial';
import ProfileCliente from '../Pages/Profile/ProfileCliente';
import PainelControle from '../Pages/PainelControle';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cadastro" component={CadastroInicial} />
            <Route path="/profile/:id" component={ProfileCliente} isPrivate />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route
                path="/painelcontrole/:name"
                component={PainelControle}
                isPrivate
            />
        </Switch>
    );
}
