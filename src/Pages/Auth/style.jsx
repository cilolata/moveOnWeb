import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    margin: 2% 5% 2% 0;

    &:hover .dropdown-content {
        display: block;
    }

    .dropbtn {
        background-color: teal;
        color: white;
        padding: 10px;
        font-size: 16px;
        border-radius: 1px;
        border: none;
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
`;
