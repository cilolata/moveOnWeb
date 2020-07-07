import createSagaMilddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMilddleware = createSagaMilddleware();

const middlewares = [sagaMilddleware];

const store = createStore(rootReducer, middlewares);

sagaMilddleware.run(rootSaga);

export default store;
