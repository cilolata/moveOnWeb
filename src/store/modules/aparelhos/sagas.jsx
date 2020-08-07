/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';


export function* registerAparelho({ payload }) {
    const {
        nome,
        descricao,
        peso,
        quantidade,
        valor_diaria,
        file_id,
        id,
    } = payload;
    try {
        yield call(api.post, 'aparelhos', {
            nome,
            descricao,
            peso,
            quantidade,
            valor_diaria,
            file_id,
            empresa_id: id,
        });
        history.push(`/dashboard/${nome}`);
    } catch (error) {
        toast.error('cadastro inválido');
    }
}

export default all([
    takeLatest('@aparelho/REGISTER_APARELHO', registerAparelho),
]);
