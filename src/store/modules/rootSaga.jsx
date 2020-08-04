/* eslint-disable import/no-named-as-default */
import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import profileEmpresa from './profileEmpresa/sagas';
import profileCliente from './profileCliente/sagas';
import aparelhos from './aparelhos/sagas';
import anuncios from './anuncios/sagas';
import singleAparelho from './singleAparelho/sagas';
import registerAdd from './endereco/sagas';

export default function* rootSaga() {
    return yield all([
        auth,
        user,
        profileEmpresa,
        profileCliente,
        aparelhos,
        anuncios,
        singleAparelho,
        registerAdd,
    ]);
}
