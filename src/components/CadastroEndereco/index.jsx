/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../Form/Input';
import { registerAddress } from '../../store/modules/endereco/actions';

import { Container } from './styles';

function CadastroEndereco() {
    const profile = useSelector((state) => state.user);
    const { id } = profile.profile;
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const initialData = {
        id,
    };

    const handleSubmit = async (data, { reset }) => {
        dispatch(registerAddress(data));
        try {
            const schema = Yup.object().shape({
                rua: Yup.string().required(),
                numero: Yup.string().required().min(1),
                bairro: Yup.string().required(),
                cidade: Yup.string().required(),
                estado: Yup.string().required(),
                uf: Yup.string().required().required().max(2),
                cep: Yup.string().required().min(8),
                telefone: Yup.string().required().min(10),
                celular: Yup.string().required().min(11),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            formRef.current.setErrors({});

            reset();
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errorMessages = {};

                error.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });

                formRef.current.setErrors(errorMessages);
            }
        }
    };
    return (
        <Container>
            <h3>Endereço</h3>
            <Form
                className="form__cadastro"
                onSubmit={handleSubmit}
                initialData={initialData}
                ref={formRef}
            >
                <Input type="text" name="rua" placeholder="Rua" title="Rua" />

                <Input
                    name="numero"
                    placeholder="Número"
                    title="numero"
                    type="text"
                />

                <Input
                    type="text"
                    name="bairro"
                    placeholder="Bairro"
                    title="bairro"
                />
                <Input
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    title="cidade"
                />
                <Input type="text" name="uf" placeholder="UF" title="uf" />
                <Input type="text" name="cep" placeholder="CEP" title="cep" />
                <Input
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                    title="telefone"
                />
                <Input
                    type="text"
                    name="celular"
                    placeholder="Celular"
                    title="celular"
                />
                <Input type="hidden" name="id" />
                <button className="btn__cadastro" type="submit">
                    Salvar
                </button>
            </Form>
        </Container>
    );
}

export default CadastroEndereco;
