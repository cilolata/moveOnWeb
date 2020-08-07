/* eslint-disable no-console */

export function getEmpresa(data) {
    return {
        type: '@getEmpresa/GET_EMPRESA',
        payload: { data },
    };
}
