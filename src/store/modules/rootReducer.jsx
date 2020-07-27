import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import profileEmpresa from './profileEmpresa/reducer';
import profileCliente from './profileCliente/reducer';
import aparelhos from './aparelhos/reducer';
import anuncios from './anuncios/reducer';

export default combineReducers({
    auth,
    user,
    profileEmpresa,
    profileCliente,
    aparelhos,
    anuncios,
});
