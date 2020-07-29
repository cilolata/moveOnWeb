import styled from 'styled-components';

export const Container = styled.section`
    @media (min-width: 900px) {
        display: flex;
    }
`;

export const MeusAnuncios = styled.div`
    width: 100%;
    padding: 3%;

    h2 {
        text-align: center;
    }

    .container_meusAnuncios {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 3%;
    }

    .card__img {
        height: 150px;
    }

    Button {
        background: teal;
    }
`;

export const FormAnuncio = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        padding: 6% 0;
    }

    .cadastro_equipamento {
        width: 40%;
    }

    .btn__cadastro {
        width: 100%;
        margin: 15px 0 0;
        height: 44px;
        border: 0;
        border-radius: 4px;
        background: #228180;
        font-weight: bold;
        color: #fff;
        font-size: 16px;
        transition: background 0.2s;
    }
    .btn__cadastro:hover {
        opacity: 0.7;
    }

    @media (min-width: 900px) {
        .cadastro_equipamento {
            width: 50%;
        }
    }
`;
