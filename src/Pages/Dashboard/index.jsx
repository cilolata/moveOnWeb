/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useRef, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Form/Input';
import InputFoto from '../../components/Form/InputFoto';
import { registerAparelho } from '../../store/modules/aparelhos/actions';
import api from '../../services/api';

import { MeusAnuncios, Container } from './style';

function Dashboard(props) {
    const [empresaId, setEmpresaId] = useState();
    const user = useSelector((state) => state.user);
    const { id } = user.profile;
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const initialData = {
        empresa_id: empresaId,
    };

    // useEffect(() => {
    //     async function loadEmpresa() {
    //         const response = await api.get('empresas');
    //         const empresa = response.data.map((e) => {
    //             return e.user_id;
    //         });
    //         // eslint-disable-next-line no-unused-vars
    //         const emp_id = empresa.filter((i) => i === id);
    //         setEmpresaId(emp_id);
    //     }
    //     loadEmpresa();
    // }, []);

    useEffect(() => {
        async function loadEmpresa() {
            const response = await api.get('empresas');
            const empresa = response.data.filter((e) => e.user_id === id);
            // eslint-disable-next-line no-unused-vars
            const idEmpresa = empresa.map((i) => setEmpresaId(i.id));
        }
        loadEmpresa();
    }, [id]);

    function handleSubmit({
        nome,
        descricao,
        peso,
        quantidade,
        valor_diaria,
        file_id,
        empresa_id,
    }) {
        dispatch(
            registerAparelho(
                nome,
                descricao,
                peso,
                quantidade,
                valor_diaria,
                file_id,
                empresa_id
            )
        );
    }

    return (
        <>
            <MeusAnuncios>
                {props.aparelho.map((a) => (
                    <Card key={a.id} style={{ width: '12rem', margin: '0 3%' }}>
                        <Card.Img
                            variant="top"
                            className="card__img"
                            src={a.foto.url}
                        />
                        <Card.Body className="p-1 mx-auto">
                            <Card.Title>{a.nome}</Card.Title>
                            <Card.Text>{a.descricao}</Card.Text>
                            <Button>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </MeusAnuncios>
            <Container>
                <h2>Novo Anúncio</h2>
                <Form
                    ref={formRef}
                    className="cadastro_equipamento"
                    style={{ width: '30%' }}
                    initialData={initialData}
                    onSubmit={handleSubmit}
                >
                    <InputFoto name="file_id" />
                    <Input
                        name="nome"
                        placeholder="Nome do equipamento"
                        title="Nome do equipamento"
                    />
                    <Input
                        className="input__textarea"
                        type="textarea"
                        name="descricao"
                        placeholder="descrição"
                        title="descrição"
                    />

                    <Input
                        className="input__peso"
                        name="peso"
                        placeholder="peso em Kg"
                        title="peso"
                    />
                    <Input
                        className="input__qta"
                        type="number"
                        name="quantidade"
                        placeholder="quandidade"
                        title="quantidade"
                    />
                    <Input
                        className="input__valor"
                        name="valor_diaria"
                        placeholder="valor diária"
                        title="valor diária"
                    />
                    <Input name="empresa_id" type="hidden" />
                    <button className="btn__cadastro" type="submit">
                        Enviar
                    </button>
                </Form>
            </Container>
        </>
    );
}

export default Dashboard;
