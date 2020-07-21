/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    registerCliente: null,
    name: null,
};

function profileCliente(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@user/PROFILE_REGISTER_CLIENTE':
            return produce(state, (draft) => {
                draft.registerCliente = action.payload;
            });

        case '@user/REGISTER_CLIENTE_SUCCESS':
            return produce(state, (draft) => {
                draft.name = action.payload.name;
            });

        default:
            return state;
    }
}

export default profileCliente;
