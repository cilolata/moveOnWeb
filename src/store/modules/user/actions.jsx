/* eslint-disable no-console */
export function update(profile) {
    console.log(profile);
    return {
        type: '@auth/UPDATE_PROFILE',
        payload: { profile },
    };
}
