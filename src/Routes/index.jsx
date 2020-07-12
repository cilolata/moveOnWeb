import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
// import CadastroCompleto from '../Pages/CadastroCompleto';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/" component={CadastroCompleto} /> */}
            <Route exact path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    );
}
