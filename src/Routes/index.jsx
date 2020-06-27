import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./Home";
import CadastroRoute from "./CadastroRoute";

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cadastro " component={CadastroRoute}/>
   </Switch>
);
  
export default Routes;