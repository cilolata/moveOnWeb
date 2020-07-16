/* eslint-disable no-console */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';

import api from '../../../services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        // if (user.type === '') {
        //     toast.error('empresa');
        //     return;
        // }

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));
        history.push('/dashboard');
    } catch (error) {
        toast.error('email e/ou senha inválidos');
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password, type } = payload;

        yield call(api.post, 'users', {
            name,
            email,
            password,
            type,
        });

        history.push('/');
    } catch (error) {
        toast.error('Falha ao se cadastrar');

        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
