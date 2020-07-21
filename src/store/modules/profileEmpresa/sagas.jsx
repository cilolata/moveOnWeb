/* eslint-disable camelcase */
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

export function* profileEmpresa({ payload }) {
    const { nome, razao_social, cnpj } = payload.data;
    try {
        yield call(api.post, 'empresas', {
            nome_fantasia: nome,
            razao_social,
            cnpj,
        });
    } catch (error) {
        toast.error('cadastro inválido');
    }
}

export default all([
    takeLatest('@user/PROFILE_REGISTER_EMPRESA', profileEmpresa),
]);
