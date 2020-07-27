import styled from 'styled-components';
import heroImg from '../../assets/TREINANDO_EM_CASA_3.jpg';

export const MainHome = styled.section`
    width: 100%;
`;

export const Container = styled.div`
    background-image: linear-gradient(
            rgba(63, 62, 62, 0.6),
            rgba(126, 134, 130, 0.6)
        ),
        url(${heroImg});
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: 10%;
    background-size: cover;
    height: 30vh;

    h1 {
        color: rgb(234, 234, 234);
        width: 60%;
        font-size: 1.5rem;
    }

    a {
        color: teal;
        text-decoration: none;
    }

    @media (min-width: 500px) {
        background-position-y: 100%;
        height: 50vh;
    }

    @media (min-width: 900px) {
        background-position-y: 50%;
        height: 100vh;

        h1 {
            width: 50%;
            font-size: 3rem;
            padding-left: 5%;
        }

        a {
            padding-left: 5%;
            font-size: 2rem;
        }
    }
`;

export const Categorias = styled.section`
    background-color: rgb(234, 234, 234);
    background-size: cover;

    h4 {
        text-align: center;
        padding: 2% 0;
    }

    .categorias__container {
        display: flex;
    }
    .categorias__destaque {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 50%;
        border-radius: 50%;
        border: 3px solid teal;
    }

    @media (min-width: 900px) {
        h4 {
            font-size: 2rem;
        }
        .categorias__container {
            display: flex;
            justify-content: center;
        }
    }
`;

export const NovosAparelhos = styled.section`
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
