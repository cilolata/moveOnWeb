import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../components/Header';

import history from '../services/history'

import '../config/ReactotronConfig';

import './App.css';
import GlobalStyle from '../styles/global';

import Routes from '../Routes';

// eslint-disable-next-line import/extensions

import store from '../store';

function App() {
    return (
        <Provider store={store}>
                <Router history={history} >
                    <Header />
                    <GlobalStyle />
                    <Routes />
                </Router>
        </Provider>
    );
}

export default App;
