import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "../Pages/Home"
import Cadastro from "../Pages/Cadastro";

const Routes = () => (
    <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route exact path="/" component={Home} />
    </Switch>
);
  
export default Routes;