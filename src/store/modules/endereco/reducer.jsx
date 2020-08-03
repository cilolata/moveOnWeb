/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    add: null,
};

function address(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@address/REGISTER_ADDRESS':
            return produce(state, (draft) => {
                draft.add = action.payload;
            });

        default:
            return state;
    }
}

export default address;
