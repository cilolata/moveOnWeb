/* eslint-disable no-param-reassign */
import produce from 'immer';

function anuncios(state = {}, action) {
    switch (action.type) {
        case '@anuncios/GET_ANUNCIOS':
            return produce(state, (draft) => {
                draft.anuncios = action.payload.data;
            });

        default:
            return state;
    }
}

export default anuncios;
