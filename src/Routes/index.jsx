import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "../Pages/Home"
import Cadastro from "../Pages/Cadastro";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route  path="/login" component={Login} />
        <Route  path="/dashboard" component={Dashboard} />
    </Switch>
);
  
export default Routes;