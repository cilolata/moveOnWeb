/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    registerEmpresa: null,
};

function profileEmpresa(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@user/PROFILE_REGISTER_EMPRESA':
            return produce(state, (draft) => {
                draft.registerEmpresa = action.payload;
            });

        default:
            return state;
    }
}

export default profileEmpresa;
