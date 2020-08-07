import styled from 'styled-components';

export const ProfileEmpresaStyle = styled.section`
    padding: 2% 20%;

    .form__cadastro {
        width: 100%;
    }

    label {
        width: 50%;
    }

    .container__label {
        display: flex;
        flex-direction: column;
    }

    .btn__cadastro {
        width: 50%;
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
        .btn__cadastro {
            width: 30%;
        }
    }
`;
