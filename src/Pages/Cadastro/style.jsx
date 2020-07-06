import styled from 'styled-components';

export const SectionCadastro = styled.section`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .cadastro {
        width: 100%;
        padding: 4%;
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

    .form__cadastro span {
        margin: 5% 0;
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

    .btn__cadastro:hover {
        background-color: rgb(2, 95, 95);
    }

    .form__intructions {
        font-size: 0.7rem;
        color: #f00;
    }
`;
