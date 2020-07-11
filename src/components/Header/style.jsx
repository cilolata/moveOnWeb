import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 15vh;
    background: #0f0f0f;
    background-size: cover;
    box-shadow: 0 5px 8px 5px rgba(0, 0, 0, 0.2);

    .header__container--brand {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 13%;
        background-color: teal;
        background-size: cover;
    }

    .header__name--brand {
        width: 70%;
        padding: 3% 3% 3% 8%;
        border: 2px solid rgb(228, 217, 217);
        border-radius: 1px;
        color: rgb(228, 217, 217);
        font-size: 1.5rem;
    }

    .header__nav {
        width: 65%;
    }

    .header__ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .header__li {
        width: 15%;
        height: 15vh;
        border-right: 1px solid #252524;
        border-left: 1px solid #252524;
    }

    .header__li:hover {
        border-bottom: 4px solid teal;
    }

    .header__li a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15vh;
        color: #fff;
    }

    @media (max-width: 980px) {
        .header__ul {
            display: none;
        }
    }
`;