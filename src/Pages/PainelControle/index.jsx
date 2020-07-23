/* eslint-disable camelcase */
import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Form/Input';
import InputFoto from '../../components/Form/InputFoto';
import api from '../../services/api';

import { Container } from './style';
import { registerAparelho } from '../../store/modules/aparelhos/actions';

function PainelControle() {
    const [empresaId, setEmpresaId] = useState('');
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
            const empresa = response.data.map((e) => {
                return e.user_id;
            });
            // eslint-disable-next-line no-unused-vars
            const emp_id = empresa.filter((i) => i === id);
            setEmpresaId(emp_id);
        }
        loadEmpresa();
    }, []);

    function handleSubmit(data) {
        dispatch(registerAparelho(data));
    }

    return (
        <>
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

export default PainelControle;
