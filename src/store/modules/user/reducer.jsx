/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    profile: null,
};

function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@auth/SIGN_IN_SUCCESS':
            return produce(state, (draft) => {
                draft.profile = action.payload.user;
            });

        case '@user/REGISTER_CLIENTE_SUCCESS':
            return produce(state, (draft) => {
                draft.profile = action.payload.name;
            });

        default:
            return state;
    }
}

export default user;
