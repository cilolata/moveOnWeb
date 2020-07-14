/* eslint-disable no-shadow */
import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { SectionCadastro } from './style';

import Input from '../../components/Form/Input';
import CheckboxInput from '../../components/Form/CheckboxInput';

function CadastroInicial() {
    const formRef = useRef(null);

    const checkboxOptions = [
        { id: '0', value: '0', label: 'Usuário' },
        { id: '1', value: '1', label: 'Empresa' },
    ];

    const handleSubmit = async (data, { reset }) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                email: Yup.string().required('O e-mail é obrigatório'),
                password: Yup.string()
                    .min(8, 'A senha deve conter no mínimo 8 caracteres')
                    .required('A senha é obrigatória'),
                checkbox: Yup.array()
                    .min(1)
                    .max(1)
                    .required('Escolha uma opção'),
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
        <SectionCadastro>
            <div className="cadastro">
                <h1 className="heading__cadastro">Faça o seu cadastro</h1>
                <p className="p__cadastro">ou entre com</p>
                <div className="container__cadastro">
                    <Form
                        ref={formRef}
                        className="form__cadastro"
                        onSubmit={handleSubmit}
                        style={{ width: '30%' }}
                    >
                        <CheckboxInput
                            name="checkbox"
                            options={checkboxOptions}
                        />
                        <Input name="name" placeholder="Nome" title="Nome" />
                        <Input name="email" placeholder="Email" title="Email" />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Senha"
                            title="Senha"
                        />
                        <p className="form__intructions">
                            obs: a senha precisa conter 8 caracteres
                        </p>
                        <button className="btn__cadastro" type="submit">
                            Enviar
                        </button>
                    </Form>
                </div>
            </div>
        </SectionCadastro>
    );
}

export default CadastroInicial;
