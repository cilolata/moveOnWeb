import React from 'react';
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import '../config/ReactotronConfig';

import history from '../services/history';

import './App.css';
import GlobalStyle from '../styles/global';

import Routes from '../Routes';
import { store, persistor } from '../store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Header />
                    <GlobalStyle />
                    <ToastContainer autoClose={3000} />
                    <Routes />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
