export function profileRegisterEmpresa(data) {
    return {
        type: '@user/PROFILE_REGISTER_EMPRESA',
        payload: { data },
    };
}
