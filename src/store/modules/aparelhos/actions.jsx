/* eslint-disable camelcase */
export function registerAparelho(
    nome,
    descricao,
    peso,
    quantidade,
    valor_diaria,
    file_id,
    id
) {
    return {
        type: '@aparelho/REGISTER_APARELHO',
        payload: {
            nome,
            descricao,
            peso,
            quantidade,
            valor_diaria,
            file_id,
            id,
        },
    };
}
