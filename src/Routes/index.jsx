import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import CadastroCompleto from '../Pages/CadastroCompleto';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={CadastroCompleto} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
);

export default Routes;
