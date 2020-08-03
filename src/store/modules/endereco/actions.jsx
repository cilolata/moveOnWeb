/* eslint-disable no-console */
export function registerAddress(data) {
    console.log(data);
    return {
        type: '@address/REGISTER_ADDRESS',
        payload: { data },
    };
}
