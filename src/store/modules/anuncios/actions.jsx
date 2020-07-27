export function loadAnuncios(data) {
    return {
        type: '@anuncios/GET_ANUNCIOS',
        payload: { data },
    };
}
