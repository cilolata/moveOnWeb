/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Input from '../../../components/Form/Input';
import { profileRegisterCliente } from '../../../store/modules/profileCliente/actions';
import CadastroEndereco from '../../../components/CadastroEndereco';

import { Profile } from './style';
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
        <Profile>
            <div className="container__cadastro">
                <h2>Cadastro</h2>
                {type === '0' ? (
                    <>
                        <Form
                            className="form__cadastro"
                            onSubmit={handleSubmit}
                            initialData={initialData}
                            ref={formRef}
                        >
                            <Input
                                className="input_cadastro"
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                title="Nome"
                            />

                            <Input
                                className="input_cadastro"
                                name="sobrenome"
                                placeholder="Sobrenome"
                                title="Sobrenome"
                                type="text"
                            />

                            <Input
                                className="input_cadastro"
                                type="text"
                                name="cpf"
                                placeholder="xxx.xxx.xxx-xx"
                                title="CPF"
                            />

                            <Input
                                className="input_cadastro"
                                type="Date"
                                name="data_nascimento"
                                placeholder="Data de Nascimento"
                                title="Data de Nascimento"
                            />
                            <Input type="hidden" name="id" />

                            <button
                                className="btn__cadastro"
                                type="submit"
                                onClick={() => setVisible(!visible)}
                            >
                                Salvar
                            </button>
                        </Form>
                        {visible && <CadastroEndereco />}
                    </>
                ) : (
                    <>
                        <ProfileEmpresa />
                    </>
                )}
            </div>
        </Profile>
    );
}

export default ProfileCliente;
