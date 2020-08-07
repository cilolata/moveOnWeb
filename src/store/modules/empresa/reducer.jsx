/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    empresa: null,
    id: null,
};

function getEmpresa(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@getEmpresa/GET_EMPRESA':
            return produce(state, (draft) => {
                draft.empresa = action.payload.data;
                draft.id = action.payload.data.map((i) => i.id);
            });

        default:
            return state;
    }
}

export default getEmpresa;
