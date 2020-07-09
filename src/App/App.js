import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import '../config/ReactotronConfig';

import './App.css';
import GlobalStyle from '../styles/global';

import Routes from '../Routes';

// eslint-disable-next-line import/extensions
import history from '../services/history';

import store from '../store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter history={history}>
                    <GlobalStyle />
                    <Routes />
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
