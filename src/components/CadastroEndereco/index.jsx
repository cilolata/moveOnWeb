/* eslint-disable jsx-a11y/label-has-associated-control */
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
                uf: Yup.string().required().required().max(2),
                cep: Yup.string().required().min(8),
                telefone: Yup.string().required().min(11),
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
            <h2 className="m-3">Endereço</h2>
            <Form
                className="form__cadastro"
                onSubmit={handleSubmit}
                initialData={initialData}
                ref={formRef}
            >
                <div className="d-flex  flex-wrap">
                    <div className="container__label m-3">
                        <label>Rua</label>
                        <Input
                            type="text"
                            name="rua"
                            placeholder="Rua"
                            title="Rua"
                        />
                    </div>

                    <div className="container__label m-3">
                        <label>Número</label>

                        <Input
                            name="numero"
                            placeholder="Número"
                            title="numero"
                            type="text"
                        />
                    </div>

                    <div className="container__label m-3">
                        <label>Bairro</label>

                        <Input
                            type="text"
                            name="bairro"
                            placeholder="Bairro"
                            title="bairro"
                        />
                    </div>

                    <div className="container__label m-3">
                        <label>Cidade</label>
                        <Input
                            type="text"
                            name="cidade"
                            placeholder="Cidade"
                            title="cidade"
                        />
                    </div>

                    <div className="container__label m-3">
                        <label>UF</label>
                        <Input
                            type="text"
                            name="uf"
                            placeholder="UF"
                            title="uf"
                        />
                    </div>

                    <div className="container__label m-3">
                        <label>CEP</label>
                        <Input
                            type="text"
                            name="cep"
                            placeholder="CEP"
                            title="cep"
                        />
                    </div>

                    <div className="container__label m-3">
                        <label>Telefone</label>
                        <Input
                            type="text"
                            name="telefone"
                            placeholder="Telefone"
                            title="telefone"
                        />
                    </div>

                    <div className="container__label m-3">
                        <label>Celular</label>
                        <Input
                            type="text"
                            name="celular"
                            placeholder="Celular"
                            title="celular"
                        />
                    </div>
                </div>
                <Input type="hidden" name="id" />
                <button className="btn__cadastro m-3" type="submit">
                    Salvar
                </button>
            </Form>
        </Container>
    );
}

export default CadastroEndereco;
