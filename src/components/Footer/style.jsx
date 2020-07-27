import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    background: none repeat scroll 0 0 #0f0f0f;
    background-size: cover;
    padding: 3% 1%;
    color: #fff;

    .copy__right {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .line1 a {
        text-decoration: none;
        color: #fff;
    }

    .social__icon--container {
        margin-top: 3%;
    }

    .social__icon {
        color: #fff;
        margin: 2%;
    }
    .send__mail {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .footer__title {
        color: teal;
        margin-bottom: 2%;
    }

    .inputbox {
        width: 70%;
        margin-top: 2%;
        background: none repeat scroll 0 0 #242424;
        border: 1px solid #6f6f6f;
        border-right: transparent;
        padding: 1% 1% 1% 2%;
    }

    .button {
        width: 10%;
        background: none repeat scroll 0 0 #242424;
        border: 1px solid #6f6f6f;
        border-left: transparent;
        padding: 1%;
    }

    .icon__email {
        font-size: 0.8rem;
    }

    @media (min-width: 900px) {
        padding: 5%;
    }
`;
