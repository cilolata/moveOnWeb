// import { takeLatest, call, put, all } from 'redux-saga/effects';
// import Routes from '../../../Routes';
// import api from '../../../services/api';
// import { signInSuccess } from './actions';

// export function* signIn({ payload }) {
//     const { email, password } = payload;

//     const response = yield call(api.post, 'sessions', {
//         email,
//         password,
//     });

//     const { token, user } = response.data;

//     if (response.data) {
//         return;
//     }

//     yield put(signInSuccess(token, user));
//     Routes('/dashboard');
// }

// export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
