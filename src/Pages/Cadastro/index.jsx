import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';

import { SectionCadastro } from './style';

import Input from '../../components/Input';

const Cadastro = () => {
    const history = useHistory();
    const formRef = useRef(null);

    const handleSubmit = async (data, { reset }) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório'),
                password: Yup.string()
                    .min(8, 'A senha deve conter no mínimo 8 caracteres')
                    .required('A senha é obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            formRef.current.setErrors({});
            reset();
            const response = await api.post('users', data);

            if (response.data) {
                history.push('/login');
            }
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errorMessages = {};

                // eslint-disable-next-line no-shadow
                error.inner.forEach(error => {
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
                        classname="form__cadastro"
                        ref={formRef}
                        onSubmit={handleSubmit}
                        style={{ width: '30%' }}
                    >
                        <Input
                            name="name"
                            classname="input__Cadastro"
                            placeholder="Nome"
                            title="Nome"
                        />
                        <Input name="email" placeholder="Email" title="Email" />
                        <Input
                            type="password"
                            name="password"
                            classname="input__Cadastro"
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
};

export default Cadastro;
