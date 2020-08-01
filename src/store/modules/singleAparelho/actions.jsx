/* eslint-disable camelcase */
export function singleAparelho(
    nome,
    descricao,
    peso,
    quantidade,
    valor_diaria,
    file_id,
    empresa_id
) {
    console.log(
        nome,
        descricao,
        peso,
        quantidade,
        valor_diaria,
        file_id,
        empresa_id
    );
    return {
        type: '@singleAparelho/SINGLE_APARELHO',
        payload: {
            nome,
            descricao,
            peso,
            quantidade,
            valor_diaria,
            file_id,
            empresa_id,
        },
    };
}
