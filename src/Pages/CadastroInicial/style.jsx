import styled from 'styled-components';

export const SectionCadastro = styled.section`
    .cadastro {
        width: 100%;
        padding: 3% 0 4% 0;
        background-color: #fff;
    }

    .btn__close {
        margin-left: 2%;
        background: transparent;
        border: transparent;
    }

    .icon__close {
        font-size: 1.5rem;
    }

    .cadastro h1 {
        text-align: center;
    }

    .p__cadastro {
        text-align: center;
        padding-bottom: 3%;
    }

    .container__cadastro {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    span {
        font-weight: bold;
    }

    .btn__cadastro:hover {
        background-color: rgb(2, 95, 95);
    }

    .form__intructions {
        font-size: 0.7rem;
    }
`;
