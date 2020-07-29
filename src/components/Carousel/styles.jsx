import styled from 'styled-components';

export const Container = styled.div`
    padding: 5% 10%;

    .slick-slide {
        width: 30%;
        display: flex;
        justify-content: center;
    }
    .slick-arrow {
        background-color: teal;
        height: 35px;
        width: 35px;
        border-radius: 100px;
    }
    .slick-arrow:hover,
    .slick-arrow:active,
    .slick-arrow:focus {
        background-color: teal;
    }
`;

export const NovosAparelhos = styled.div`
    display: flex;
    justify-content: center;

    .card__img {
        height: 150px;
    }

    Button {
        background: teal;
    }
`;
