import styled from 'styled-components';

export const ProfileContainer = styled.section`
    text-align: center;
    padding: 3% 0;

    .form__completo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3%;
    }

    .div__field {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
    }

    .div__label {
        width: 50%;
        text-align: left;
    }

    .div__input {
        width: 50%;
    }

    .btn__form {
        width: 35%;
        margin: 5px 0 0;
        height: 44px;
        border: 0;
        border-radius: 4px;
        background: #228180;
        font-weight: bold;
        color: #fff;
        font-size: 16px;
        transition: background 0.2s;
    }

    .btn__form:hover {
        opacity: 0.7;
    }
`;
