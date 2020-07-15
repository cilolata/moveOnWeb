/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    token: null,
    signed: false,
    loading: false,
};
function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@auth/SIGN_IN_SUCCESS':
            return produce(state, (draft) => {
                draft.token = action.payload.token;
                draft.signed = true;
            });

        default:
            return state;
    }
}

export default auth;
