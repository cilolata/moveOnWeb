export function profileRegisterCliente(data) {
    return {
        type: '@user/PROFILE_REGISTER_CLIENTE',
        payload: { data },
    };
}

export function registerClienteSuccess(name) {
    return {
        type: '@user/REGISTER_CLIENTE_SUCCESS',
        payload: { name },
    };
}
