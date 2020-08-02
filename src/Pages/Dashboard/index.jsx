/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useRef, useEffect, useState } from 'react';

import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardProduct from '../../components/Card';
import Input from '../../components/Form/Input';
import InputFoto from '../../components/Form/InputFoto';
import SelectForm from '../../components/Form/Select';
import { registerAparelho } from '../../store/modules/aparelhos/actions';
import api from '../../services/api';

import { MeusAnuncios, Container, FormAnuncio } from './style';

const option = [
    { value: 'esteira', label: 'esteira' },
    { value: 'eliptio', label: 'elipetio' },
    { value: 'bicicleta', label: 'bicicleta' },
    {
        value: 'acessorios',
        label: 'acessório (pesos, colchões, pesos, etc.)',
    },
];

function Dashboard(props) {
    const [empresaId, setEmpresaId] = useState();
    const user = useSelector((state) => state.user);
    const { id } = user.profile;
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const initialData = {
        empresa_id: empresaId,
    };

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
        <Container>
            <FormAnuncio>
                <h2>Novo Anúncio</h2>
                <Form
                    ref={formRef}
                    className="cadastro_equipamento"
                    initialData={initialData}
                    onSubmit={handleSubmit}
                >
                    <InputFoto title="carregue uma foto" name="file_id" />
                    <SelectForm
                        className="input__equipamento"
                        name="nome"
                        placeholder="Nome do equipamento"
                        title="Nome do equipamento"
                        options={option}
                    />

                    <Input
                        className="input__equipamento"
                        type="textarea"
                        name="descricao"
                        placeholder="descrição"
                        title="descrição"
                    />

                    <Input
                        className="input__equipamento"
                        name="peso"
                        placeholder="peso em Kg"
                        title="peso"
                    />
                    <Input
                        className="input__equipamento"
                        type="number"
                        name="quantidade"
                        placeholder="quandidade"
                        title="quantidade"
                    />
                    <Input
                        className="input__equipamento"
                        name="valor_diaria"
                        placeholder="valor diária"
                        title="valor diária"
                    />
                    <Input name="empresa_id" type="hidden" />
                    <button className="btn__cadastro" type="submit">
                        Enviar
                    </button>
                </Form>
            </FormAnuncio>
            <MeusAnuncios>
                <h2>Meus Anúncios</h2>
                <div className="container_meusAnuncios">
                    {props.aparelho.map((e) => (
                        <Link
                            to={`/aparelho/${e.id}`}
                            key={e.id}
                            className="m-3"
                        >
                            <CardProduct
                                nome={e.nome}
                                foto={e.foto.url}
                                descricao={e.descricao}
                            />
                        </Link>
                    ))}
                </div>
            </MeusAnuncios>
        </Container>
    );
}

export default Dashboard;
