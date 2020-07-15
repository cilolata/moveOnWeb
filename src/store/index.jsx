/* eslint-disable no-undef */
/* eslint-disable no-console */
import { persistStore } from 'redux-persist';
import createSagaMilddleware from 'redux-saga';

import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducers';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

const sagaMilddleware = createSagaMilddleware({ sagaMonitor });

const middlewares = [sagaMilddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMilddleware.run(rootSaga);

export { store, persistor };
