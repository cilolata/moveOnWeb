export function profileRegisterEmpresa(data) {
    return {
        type: '@empresa/PROFILE_REGISTER_EMPRESA',
        payload: { data },
    };
}

export function profileSuccessEmpresa(empresa) {
    return {
        type: '@empresa/PROFILE_SUCCESS_EMPRESA',
        payload: { empresa },
    };
}

export function profileFailureEmpresa() {
    return {
        type: '@empresa/PROFILE_FAILURE_EMPRESA',
    };
}
