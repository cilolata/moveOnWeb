import styled from 'styled-components';

export const SectionCadastro = styled.section`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 20;
    backface-visibility: hidden;

    .cadastro {
        width: 50%;
        padding: 4% 0;
        background-color: #fff;
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
        padding: 5%;
        margin-top: 5%;
        background-color: teal;
        border: 1px solid teal;
        color: #fff;
        border-radius: 1px;
        font-size: 1.2rem;
        font-weight: bold;
    }

    span {
        font-weight: bold;
    }

    .btn__cadastro:hover {
        background-color: rgb(2, 95, 95);
    }

    .form__intructions {
        font-size: 0.7rem;
        color: #f00;
    }
`;
