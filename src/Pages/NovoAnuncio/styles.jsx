import styled from 'styled-components';

export const FormAnuncio = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        padding: 6% 0;
    }

    .cadastro_equipamento {
        width: 100%;
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
