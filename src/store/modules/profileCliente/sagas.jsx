/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { registerClienteSuccess } from './actions';

export function* profileCliente({ payload }) {
    const data_nascimento = '10/09/2010';
    const { nome, sobrenome, cpf } = payload.data;
    try {
        const response = yield call(api.post, 'clientes', {
            nome,
            sobrenome,
            data_nascimento,
            cpf,
        });

        const { name } = response.data;
        yield put(registerClienteSuccess(name));
    } catch (error) {
        toast.error('cadastro inválido');
    }
}

// export function* showProfileCliente() {
//     const data_nascimento = '10/09/2010';
//     const { nome, sobrenome, cpf } = payload.data;
//     try {
//         yield call(api.post, 'clientes', {
//             nome,
//             sobrenome,
//             data_nascimento,
//             cpf,
//         });
//     } catch (error) {
//         toast.error('cadastro inválido');
//     }
// }

export default all([
    takeLatest('@user/PROFILE_REGISTER_ClIENTE', profileCliente),
]);
