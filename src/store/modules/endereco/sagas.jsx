/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

export function* registerAdd({ payload }) {
    try {
        const {
            rua,
            numero,
            bairro,
            cidade,
            estado,
            uf,
            cep,
            telefone,
            celular,
            id,
        } = payload;

        const response = yield call(api.post, 'enderecos', {
            rua,
            numero,
            bairro,
            cidade,
            estado,
            uf,
            cep,
            telefone,
            celular,
            user_id: id,
        });
    } catch (error) {
        toast.error('Cadastro inválido');
    }
}

export default all([takeLatest('@address/REGISTER_ADDRESS', registerAdd)]);
