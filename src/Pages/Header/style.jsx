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
        list-style: none;
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
        text-decoration: none;
        color: #fff;
    }

    .dropdown {
        position: relative;
        display: inline-block;
        margin: 2% 5% 2% 0;
    }

    .dropbtn {
        background-color: teal;
        color: white;
        padding: 10px;
        font-size: 16px;
        border-radius: 1px;
        border: none;
        cursor: pointer;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        min-width: 200px;
        padding: 15%;
        margin-left: -185%;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-content label {
        display: block;
        padding: 5% 0;
        color: black;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .btn__form {
        width: 100%;
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

    .dropdown-content .btn__form:hover {
        opacity: 0.7;
    }

    .dropbtn:hover {
        opacity: 0.7;
    }

    @media (max-width: 980px) {
        .header__ul {
            display: none;
        }
    }
    top: 0;
`;
