/* eslint-disable camelcase */
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

export function* profileRegisterEmpresa({ payload }) {
    try {
        const { nome, razao_social, cnpj } = payload.data;
        yield call(api.post, 'empresas', {
            nome_fantasia: nome,
            razao_social,
            cnpj,
        });
    } catch (error) {
        toast.error('cadastro inválido');
    }
}

// export function* profileEmpresa() {
//     try {
//         const response = yield call(api.post, 'empresas', {
//             nome_fantasia: nome,
//             razao_social,
//             cnpj,
//         });

//         const { empresa } = response.data;

//         yield put(profileSuccessEmpresa(empresa));
//     } catch (error) {
//         toast.error('cadastro inválido');
//     }
// }

export default all([
    takeLatest('@empresa/PROFILE_REGISTER_EMPRESA', profileRegisterEmpresa),
]);
