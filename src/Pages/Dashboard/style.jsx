import styled from 'styled-components';

export const MeusAnuncios = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: #fff;
    padding: 3%;

    .card__img {
        height: 150px;
    }

    Button {
        background: teal;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

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
`;
