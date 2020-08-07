/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Input from '../../../components/Form/Input';
import { profileRegisterCliente } from '../../../store/modules/profileCliente/actions';
import CadastroEndereco from '../../../components/CadastroEndereco';

import { Profile, Container } from './style';
import ProfileEmpresa from '../ProfileEmpresa';

function ProfileCliente() {
    const profile = useSelector((state) => state.user);
    const { type, nome, id } = profile.profile;
    const formRef = useRef(null);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const initialData = {
        nome,
        id,
    };

    const handleSubmit = async (
        { nome, sobrenome, cpf, data_nascimento, id },
        { reset }
    ) => {
        const dataNascimento = new Date(data_nascimento).toLocaleDateString(
            'pt-BR'
        );
        dispatch(profileRegisterCliente(nome, sobrenome, cpf, dataNascimento));

        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                sobrenome: Yup.string().required('O sobrenome é obrigatório'),
                cpf: Yup.string()
                    .min(11)
                    .max(11)
                    .required('O cpf é obrigatório'),
                date: Yup.date().required('A data de nascimento é obrigatório'),
                email: Yup.string().required('O e-mail é obrigatório'),
            });

            await schema.validate(nome, sobrenome, cpf, data_nascimento, {
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
            <h2 className="ml-3 cadastro__heading">Cadastro</h2>
            {type === '0' ? (
                <>
                    <Profile>
                        <>
                            <Form
                                className="form__cadastro"
                                onSubmit={handleSubmit}
                                initialData={initialData}
                                ref={formRef}
                            >
                                <div className="d-flex flex-wrap">
                                    <div className="container__label m-3">
                                        <label>Nome</label>
                                        <Input
                                            className="input_cadastro"
                                            type="text"
                                            name="nome"
                                            placeholder="Nome"
                                            title="Nome"
                                        />
                                    </div>
                                    <div className="container__label m-3">
                                        <label>Sobrenome</label>
                                        <Input
                                            className="input_cadastro"
                                            name="sobrenome"
                                            placeholder="Sobrenome"
                                            title="Sobrenome"
                                            type="text"
                                        />
                                    </div>
                                    <div className="container__label m-3">
                                        <label>CPF</label>
                                        <Input
                                            className="input_cadastro"
                                            type="text"
                                            name="cpf"
                                            placeholder="xxx.xxx.xxx-xx"
                                            title="CPF"
                                        />
                                    </div>

                                    <div className="container__label m-3">
                                        <label className="w-100">
                                            Data de nascimento
                                        </label>
                                        <Input
                                            className="input_cadastro"
                                            type="Date"
                                            name="data_nascimento"
                                            placeholder="Data de Nascimento"
                                            title="Data de Nascimento"
                                        />
                                        <Input type="hidden" name="id" />
                                    </div>
                                </div>

                                <button
                                    className="btn__cadastro"
                                    type="submit"
                                    onClick={() => setVisible(!visible)}
                                >
                                    Salvar
                                </button>
                            </Form>
                            <CadastroEndereco />
                        </>
                    </Profile>
                </>
            ) : (
                <ProfileEmpresa />
            )}
        </Container>
    );
}

export default ProfileCliente;
