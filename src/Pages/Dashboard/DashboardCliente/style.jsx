import styled from 'styled-components';

export const ContainerDashboard = styled.section`
    padding: 1%;
    background: #242424;

    h1,
    h3 {
        color: teal;
    }

    h1 {
        margin: 3%;
    }

    .categorias {
        width: 100%;
        display: flex;
    }

    .categorias__destaque {
        text-align: center;
    }

    img {
        width: 50%;
        border: 3px solid teal;
    }
`;
