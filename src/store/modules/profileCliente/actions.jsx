/* eslint-disable no-console */
export function profileRegisterCliente(nome, sobrenome, cpf, dataNascimento) {
    console.log(nome, sobrenome, cpf, dataNascimento);
    return {
        type: '@cliente/PROFILE_REGISTER_CLIENTE',
        payload: { nome, sobrenome, cpf, dataNascimento },
    };
}

export function registerClienteSuccess(name) {
    return {
        type: '@cliente/REGISTER_CLIENTE_SUCCESS',
        payload: { name },
    };
}
