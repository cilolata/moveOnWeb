import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../../css/global.css";
import "./App.css";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Cadastro from "../Cadastro/Cadastro";
// import Footer from '../Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cadastro" component={Cadastro} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
