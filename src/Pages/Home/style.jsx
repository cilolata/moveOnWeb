import styled from 'styled-components';
import heroImg from '../../assets/TREINANDO_EM_CASA_3.jpg';
import priceTableImg from '../../assets/images-1.png';
import bgTitle from '../../assets/bg_title.png';

export const MainHome = styled.section`
    width: 100%;

    .hero {
        display: flex;
        justify-content: center;
        width: 100%;
        background-image: linear-gradient(
                rgba(63, 62, 62, 0.6),
                rgba(126, 134, 130, 0.6)
            ),
            url(${heroImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        height: 100vh;
    }

    .hero__heading {
        width: 100%;
        margin-top: 15%;
        margin-left: 5%;
        text-align: left;
        font-size: 1.5rem;
    }

    .hero__register {
        margin-top: 3%;
        padding: 1%;
        font-size: 1.2rem;
        color: #fff;
        background-color: teal;
        border: 1px solid teal;
    }

    .hero__register:hover {
        background-color: rgb(2, 95, 95);
    }

    .price__table {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        padding: 5%;
        background-color: #242424;
        background-size: cover;
    }

    .price__table-content {
        width: 30%;
        height: 40vh;
        display: flex;
        margin: 1%;
        background-color: #0f0f0f;
    }

    .price__table--img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        background-image: url(${priceTableImg});
        background-repeat: no-repeat;
    }

    .price__table--text {
        width: 73%;
        margin-left: 25%;
        margin-top: 5%;
        line-height: 30px;
        color: #fff;
    }

    .border-bottom {
        width: 25%;
        padding-top: 2%;
        border-bottom: 2px solid #fff;
    }

    .price__table--text p {
        margin-top: 3%;
        margin-bottom: 4%;
    }

    .price__table--link {
        padding: 4%;
        background-color: teal;
        background-size: cover;
        border: 1px solid teal;
        text-decoration: none;
        color: #fff;
    }

    .price__table-content:hover {
        background-color: teal;
    }

    .price__table-content:hover .price__table--link {
        background: none;
        border: 2px solid #fff;
    }

    .new__product {
        padding: 0 6% 6%;
        background-color: #242424;
        background-size: cover;
    }

    .products__container {
        display: flex;
        flex-wrap: wrap;
        margin-top: 5%;
    }

    .title__name {
        display: flex;
        justify-content: center;
        background: url(${bgTitle}) repeat-x scroll center center
            rgba(0, 0, 0, 0);
        padding: 20px;
    }

    .title__name h4 {
        width: 15%;
        padding: 1% 2%;
        border: 3px solid #fff;
        color: #fff;
        text-align: center;
        font-size: 1.5rem;
    }

    .product__wrapper {
        width: 23%;
        margin: 1%;
        border: 2px solid #242424;
        background-color: #0f0f0f;
        box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
    }

    .info__products {
        padding: 2%;
    }

    .product__name {
        padding: 2% 0;
    }

    .product__name a {
        text-decoration: none;
        color: #fff;
    }

    .price__box {
        padding: 3% 0;
        color: teal;
    }

    .old__price {
        margin-left: 2%;
        color: #9a9a9a;
        text-decoration: line-through;
        font-size: 0.8rem;
    }

    .actions ul {
        display: flex;
        padding: 3% 0;
        list-style: none;
    }

    .actions ul li {
        width: 10%;
        margin-right: 2%;
        padding: 2%;
        background-color: teal;
        background-size: cover;
    }

    .actions ul li a {
        text-decoration: none;
        color: #fff;
    }

    @media (max-width: 980px) {
        .price__table {
            display: flex;
            flex-direction: column;
        }

        .product__container {
            display: flex;
            flex-direction: column;
        }
    }
`;
