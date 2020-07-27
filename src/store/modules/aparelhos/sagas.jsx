/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

export function* registerAparelho({ payload }) {
    const {
        nome,
        descricao,
        peso,
        quantidade,
        valor_diaria,
        file_id,
        empresa_id,
    } = payload;
    try {
        yield call(api.post, 'aparelhos', {
            nome,
            descricao,
            peso,
            quantidade,
            valor_diaria,
            file_id,
            empresa_id,
        });
    } catch (error) {
        toast.error('cadastro inválido');
    }
}

export default all([
    takeLatest('@aparelho/REGISTER_APARELHO', registerAparelho),
]);
