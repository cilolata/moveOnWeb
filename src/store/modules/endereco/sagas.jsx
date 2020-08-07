/* eslint-disable camelcase */
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

export function* registerAdd({ payload }) {
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
    } = payload.data;
    try {
        yield call(api.post, 'enderecos', {
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
