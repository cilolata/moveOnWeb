/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

export function* profileCliente({ payload }) {
    const { nome, sobrenome, cpf, dataNascimento } = payload;
    try {
        yield call(api.post, 'clientes', {
            nome,
            sobrenome,
            data_nascimento: dataNascimento,
            cpf,
        });
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
    takeLatest('@cliente/PROFILE_REGISTER_CLIENTE', profileCliente),
]);
