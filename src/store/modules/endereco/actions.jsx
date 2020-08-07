/* eslint-disable no-console */
export function registerAddress(data) {
    return {
        type: '@address/REGISTER_ADDRESS',
        payload: { data },
    };
}

export function getAddress(data) {
    return {
        type: '@address/GET_ADDRESS',
        payload: { data },
    };
}
