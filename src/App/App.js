import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import GlobalStyle from '../styles/global';

import Header from '../Pages/Header';
import Routes from '../Routes';
import Footer from '../Pages/Footer';

import '../config/ReactotronConfig';

// eslint-disable-next-line import/extensions
import history from '../services/history';

import store from '../store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter history={history}>
                    <GlobalStyle />
                    <Header />
                    <Routes />
                    <Footer />
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
