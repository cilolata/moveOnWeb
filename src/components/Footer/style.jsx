import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    background: none repeat scroll 0 0 #0f0f0f;
    background-size: cover;
    height: 30vh;
    padding: 0 5%;
    color: #fff;

    .copy__right {
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .line1 a {
        text-decoration: none;
        color: #fff;
    }

    .social__icon {
        margin-top: 3%;
    }

    .social__icon a {
        color: #fff;
        margin: 2%;
    }

    .footer__infos {
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 5%;
    }

    .footer__title {
        color: teal;
        margin-bottom: 2%;
    }

    .send__mail {
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .inputbox {
        width: 35%;
        margin-top: 2%;
        background: none repeat scroll 0 0 #242424;
        border: 1px solid #6f6f6f;
        border-right: transparent;
        padding: 1% 1% 1% 2%;
    }

    .button {
        background: none repeat scroll 0 0 #242424;
        border: 1px solid #6f6f6f;
        border-left: transparent;
        padding: 1%;
    }

    .icon__email {
        font-size: 0.8rem;
    }
`;