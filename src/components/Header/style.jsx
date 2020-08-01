import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 10vh;
    box-shadow: 0 5px 8px 5px rgba(0, 0, 0, 0.2);

    .form__search {
        position: relative;
        overflow: visible;
    }

    .form__search:active {
        z-index: 100;
    }

    .search__dropdown .search__container {
        position: absolute;
        display: none;
        margin-left: 420px;
        margin-top: 100px;
        width: 30%;
        z-index: 100;
    }

    .button__search {
        background: teal;
        outline: none;
        border: none;
    }

    .button__search:visited {
        background: teal;
    }
`;
