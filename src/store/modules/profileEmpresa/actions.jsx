export function profileRegisterEmpresa(data) {
    return {
        type: '@empresa/PROFILE_REGISTER_EMPRESA',
        payload: { data },
    };
}

export function profileRegisterSuccess(empresa) {
    return {
        type: '@empresa/PROFILE_REGISTER_EMPRESA_SUCCESS',
        payload: { empresa },
    };
}

export function profileRegisterFailure() {
    return {
        type: '@empresa/PROFILE_REGISTER_EMPRESA_FAILURE',
    };
}

export function updateProfileEmpresa(data) {
    return {
        type: '@empresa/UPDATE_PROFILE_EMPRESA',
        payload: { data },
    };
}

export function updateProfileEmpresaSuccess(data) {
    return {
        type: '@empresa/UPDATE_PROFILE_EMPRESA_SUCCESS',
        payload: { data },
    };
}

export function updateProfileEmpresaFailure(data) {
    return {
        type: '@empresa/UPDATE_PROFILE_EMPRESA_FAILURE',
        payload: { data },
    };
}
