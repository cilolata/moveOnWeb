import React from "react";
import { BrowserRouter} from "react-router-dom";

import "../css/global.css";
import "./App.css";

import Header from "../Pages/Header";
import Footer from '../Pages/Footer';
import Routes from '../Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;