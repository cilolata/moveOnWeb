import createSagaMilddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        // eslint-disable-next-line no-console
        ? console.tron.createSagaMonitor()
        : null;

const sagaMilddleware = createSagaMilddleware({ sagaMonitor });

const middlewares = [sagaMilddleware];

const store = createStore(rootReducer, middlewares);

sagaMilddleware.run(rootSaga);

export default store;
