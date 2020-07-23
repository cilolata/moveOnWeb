/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    registerAparelho: null,
};

function aparelhos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@aparelho/REGISTER_APARELHO':
            return produce(state, (draft) => {
                draft.registerAparelho = action.payload;
            });

        default:
            return state;
    }
}

export default aparelhos;
