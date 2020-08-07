import styled from 'styled-components';

export const Section = styled.section`
    padding: 5%;
`;

export const Container = styled.div`
    padding: 5%;
    width: 100%;

    .container__infos {
        width: 70%;
    }

    .div__whatsapp {
        width: 100%;
    }

    .button__whatsapp {
        width: 20%;
        background: #25d366;
        border: #25d366;
        padding: 1%;
        border-radius: 30px;
    }

    .button__whatsapp:hover {
        background: #29cc7d;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
        text-decoration: none;
    }

    .contact {
    }

    .div__img {
        display: flex;
        justify-content: center;
        padding-bottom: 5%;
    }

    @media (min-width: 900px) {
        display: flex;
        padding: 0;

        .container__infos {
            display: flex;
            flex-direction: column;
        }

        .div__img {
            width: 50%;
        }

        img {
            width: 70%;
        }
    }
`;

export const ContainerTable = styled.section`
    padding-top: 5%;

    @media (min-width: 900px) {
        padding: 0 7%;
    }
`;
