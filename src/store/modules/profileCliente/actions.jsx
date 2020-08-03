/* eslint-disable no-console */
export function profileRegisterCliente(
    nome,
    sobrenome,
    cpf,
    dataNascimento,
    id
) {
    return {
        type: '@cliente/PROFILE_REGISTER_CLIENTE',
        payload: { nome, sobrenome, cpf, dataNascimento, id },
    };
}

export function registerClienteSuccess(name) {
    return {
        type: '@cliente/REGISTER_CLIENTE_SUCCESS',
        payload: { name },
    };
}
