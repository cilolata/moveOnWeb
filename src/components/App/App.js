import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../../css/Global.css';
import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routes from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Header/>
         <Routes/>
       <Footer/>
    </div>
      </BrowserRouter>
  );
}

export default App;
