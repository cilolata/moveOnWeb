import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 5%;

    .meus__anuncios {
        width: 50%;
    }

    img {
        width: 50%;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 300px;
        margin: auto;
        text-align: center;
        font-family: arial;
    }

    .card__container {
        padding: 12px;
        color: white;
        background-color: #000;
        text-align: center;
        width: 100%;
        font-size: 12px;
    }

    .card__container:hover {
        opacity: 0.7;
    }
`;
