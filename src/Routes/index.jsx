import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../Pages/Home';
import Cadastro from '../Pages/Cadastro';
import Dashboard from '../Pages/Dashboard';

export default function Routes(){
    return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
);
} 


