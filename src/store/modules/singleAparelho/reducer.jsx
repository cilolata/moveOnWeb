/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    singleAparelho: null,
};

function singleAparelho(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@singleAparelho/SINGLE_APARELHO':
            return produce(state, (draft) => {
                draft.singleAparelho = action.payload;
            });

        default:
            return state;
    }
}

export default singleAparelho;
