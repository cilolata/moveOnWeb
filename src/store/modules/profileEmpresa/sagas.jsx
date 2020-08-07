/* eslint-disable camelcase */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { profileRegisterSuccess, profileRegisterFailure } from './actions';
import history from '../../../services/history';

import api from '../../../services/api';

export function* profileRegisterEmpresa({ payload }) {
    try {
        const { nome, razao_social, cnpj } = payload.data;
        const response = yield call(api.post, 'empresas', {
            nome_fantasia: nome,
            razao_social,
            cnpj,
        });
        const { empresa } = response.data;
        yield put(profileRegisterSuccess(empresa));
        history.push('/');
    } catch (error) {
        toast.error('cadastro inválido - verifique os seus dados');
        yield put(profileRegisterFailure());
    }
}

export default all([
    takeLatest('@empresa/PROFILE_REGISTER_EMPRESA', profileRegisterEmpresa),
]);
