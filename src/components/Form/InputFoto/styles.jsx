import styled from 'styled-components';

export const Container = styled.div`
    align-self: center;
    position: relative;

    label {
        cursor: pointer;
        border: dotted;
        width: 100%;
        text-align: center;

        &:hover {
            opacity: 0.7;
        }

        img {
            width: 100%;
        }

        #file_id {
            display: none;
        }
    }
`;
