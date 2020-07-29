import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    margin: 2% 3% 2% 0;
    &:hover .dropdown-content {
        display: block;
    }
    .dropbtn {
        background-color: teal;
        color: white;
        padding: 4px 10px;
        font-size: 14px;
        border-radius: 1px;
        border: none;
        border-radius: 3px;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        width: 200px;
        padding: 15%;
        margin-left: -250%;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;

        @media (min-width: 900px) {
            margin-left: -140%;
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

        .input__auth {
            width: 100%;
            font-size: 0.8rem;
            padding-top: 4%;
            color: #4e75f5;
            border: transparent;
            background: transparent;
            cursor: pointer;
        }
    }
`;
