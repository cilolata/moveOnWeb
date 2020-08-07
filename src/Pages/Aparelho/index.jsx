/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/named */
/* eslint-disable eqeqeq */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { FaWhatsapp } from 'react-icons/fa';

import { Container, ContainerTable, Section } from './styles';

function Aparelho() {
    const { id } = useParams();
    const idProduct = id;
    const aparelhos = useSelector((state) =>
        state.anuncios.anuncios.filter((a) => a)
    );
    const profile = useSelector((state) => state.user);
    const { nome } = profile.profile;

    const singleAp = aparelhos.filter((ap) => ap.id == idProduct);

    return (
        <Section>
            {singleAp.map((e) => (
                <>
                    <Container key={e.id}>
                        <>
                            <div className="div__img">
                                <img src={e.foto.url} alt="" />
                            </div>
                            <div className="container__infos">
                                <div className="div__infos">
                                    <h2>{e.nome}</h2>
                                    <p>Alugado por: {nome}</p>
                                </div>
                                <div className="div__whatsapp">
                                    <p>Entrar em contato</p>
                                    <button
                                        type="button"
                                        className="button__whatsapp"
                                    >
                                        <a href="https://wa.me/5511974515510">
                                            <FaWhatsapp classnName="contact ml-2" />
                                            Whatsapp
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </>
                    </Container>
                    <ContainerTable>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan="12">Informações do produto</th>
                                </tr>
                            </thead>
                            <>
                                <tbody>
                                    <tr>
                                        <td colSpan="12">{e.descricao}</td>
                                    </tr>
                                    <tr>
                                        <td>Peso</td>
                                        <td className="col-4">{e.peso} Kg</td>
                                    </tr>
                                    <tr>
                                        <td>Valor diária</td>
                                        <td className="col-4">
                                            R$ {e.valor_diaria}
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        </Table>
                    </ContainerTable>
                </>
            ))}
        </Section>
    );
}

export default Aparelho;
