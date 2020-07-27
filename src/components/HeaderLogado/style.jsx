import styled from 'styled-components';

export const ContainerHeader = styled.div`
    position: relative;
    display: inline-block;
    margin: 2% 5% 2% 0;

    &:hover .dropdown {
        display: block;
    }

    .menu__dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    .dropdown {
        display: none;
        position: absolute;
        min-width: 200px;
        padding: 15%;
        margin-left: -100%;
        background-color: #fff;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown__content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        background: transparent;
        border: transparent;
        font-size: 1rem;
    }

    a {
        color: #000;
        padding-bottom: 5%;
    }
`;
