import styled from 'styled-components';

export const Container = styled.section`
    @media (min-width: 900px) {
        display: flex;
    }
`;

export const MeusAnuncios = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;

    h2 {
        text-align: center;
    }

    @media (min-width: 900px) {
        .container__meusAnuncios {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`;
