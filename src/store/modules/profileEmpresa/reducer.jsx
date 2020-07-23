/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    registerEmpresa: null,
    profileEmpresa: null,
};

function profileEmpresa(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@empresa/PROFILE_REGISTER_EMPRESA':
            return produce(state, (draft) => {
                draft.registerEmpresa = action.payload;
            });

        case '@empresa/PROFILE_SUCCESS_EMPRESA':
            return produce(state, (draft) => {
                draft.profileEmpresa = action.payload.empresa;
            });

        default:
            return state;
    }
}

export default profileEmpresa;
