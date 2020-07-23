export function registerAparelho(data) {
    console.log(data);
    return {
        type: '@aparelho/REGISTER_APARELHO',
        payload: { data },
    };
}
