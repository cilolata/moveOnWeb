/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
import React, { useRef } from 'react';

import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/Form/Input';
import InputFoto from '../../components/Form/InputFoto';
import SelectForm from '../../components/Form/Select';
import { registerAparelho } from '../../store/modules/aparelhos/actions';

import { FormAnuncio } from './styles';

const option = [
    { value: 'esteira', label: 'esteira' },
    { value: 'eliptio', label: 'elipetio' },
    { value: 'bicicleta', label: 'bicicleta' },
    {
        value: 'acessorios',
        label: 'acessório (pesos, colchões, pesos, etc.)',
    },
];

function NovoAnuncio() {
    const emp = useSelector((state) => state.getEmpresa.id);
    const endereco = useSelector((state) => state.address.getAddress);

    
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const empId = emp.map((i) => i);

    const initialData = {
        id: empId,
    };

    function handleSubmit({
        nome,
        descricao,
        peso,
        quantidade,
        valor_diaria,
        file_id,
        id,
    }) {
        dispatch(
            registerAparelho(
                nome,
                descricao,
                peso,
                quantidade,
                valor_diaria,
                file_id,
                id
            )
        );
    }
    return (
        <FormAnuncio className="pt-2 pb-2">
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
                <Input name="id" type="hidden" />
                <button className="btn__cadastro" type="submit">
                    Enviar
                </button>
            </Form>
        </FormAnuncio>
    );
}

export default NovoAnuncio;
