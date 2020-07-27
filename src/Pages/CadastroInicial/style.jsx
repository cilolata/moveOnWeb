import styled from 'styled-components';

export const SectionCadastro = styled.section`
    background-color: rgb(234, 234, 234);
    background-size: cover;
    height: 100%;

    .cadastro h2 {
        text-align: center;
        padding-top: 10%;
    }

    .form__cadastro {
        width: 100%;
    }

    .p__cadastro {
        text-align: center;
        padding-bottom: 3%;
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

    .btn__cadastro:hover {
        background-color: rgb(2, 95, 95);
    }

    .form__intructions {
        font-size: 0.7rem;
    }

    @media (min-width: 900px) {
        .container__cadastro {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .cadastro h2 {
            padding-top: 5%;
        }
        .form__cadastro {
            width: 30%;
        }
    }
`;
