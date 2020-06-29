import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "../components/Home/Home"
import Cadastro from "../components/Cadastro/Cadastro";
import Login from "../components/Login/Login";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route  path="/login" component={Login} />
    </Switch>
);
  
export default Routes;