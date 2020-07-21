/* eslint-disable import/no-named-as-default */
import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import profileEmpresa from './profileEmpresa/sagas';
import profileCliente from './profileCliente/sagas';

export default function* rootSaga() {
    return yield all([auth, user, profileEmpresa, profileCliente]);
}
