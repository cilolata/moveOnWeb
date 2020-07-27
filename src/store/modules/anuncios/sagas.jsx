/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

export function* getAnuncios({ payload }) {
    try {
        const response = yield call(api.get, 'aparelhos');
        yield put({
            type: '@anuncios/GET_ANUNCIOS',
            payload: response,
        })
    } catch (error) {
        toast.error('cadastro inválido');
    }
}

export default all([takeLatest('@anuncios/GET_ANUNCIOS', getAnuncios)]);
