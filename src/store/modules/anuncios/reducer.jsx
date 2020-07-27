/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    anuncios: null,
};

function anuncios(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@anuncios/GET_ANUNCIOS':
            return produce(state, (draft) => {
                draft.anuncios = action.payload;
            });

        default:
            return state;
    }
}

export default anuncios;
