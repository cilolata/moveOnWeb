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
                // eslint-disable-next-line no-param-reassign
                draft.token = action.payload.token;
                // eslint-disable-next-line no-param-reassign
                draft.signed = true;
            });

        default:
            return state;
    }
}

export default auth;
