import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 5% 0;

    .container__checkbox {
        display: flex;
        justify-content: space-around;
    }

    label {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
    }

    input {
        margin-right: 2%;
    }

    span {
        margin: 0 auto;
    }
`;
