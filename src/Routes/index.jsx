import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "../components/Home/Home"
import Cadastro from "../components/Cadastro/Cadastro";

const Routes = () => (
    <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route exact path="/" component={Home} />
    </Switch>
);
  
export default Routes;