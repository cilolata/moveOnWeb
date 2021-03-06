/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import { signInRequest } from '../../store/modules/auth/actions';
import Input from '../Form/Input';

import { Wrapper } from './style';

export default function Auth() {
    const formRef = useRef(null);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    async function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));

        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório'),
                password: Yup.string()
                    .min(8, 'A senha deve conter no mínimo 8 caracteres')
                    .required('A senha é obrigatória'),
            });

            await schema.validate(email, password, {
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
    }

    return (
        <>
            <Wrapper>
                <button type="button" className="dropbtn mr-sm-3 mr-lg-5">
                    Entrar
                </button>
                <div className="dropdown-content">
                    <Form onSubmit={handleSubmit} ref={formRef}>
                        <Input
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            title="E-mail"
                            className="input__auth"
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Senha"
                            title="Senha"
                            className="input__auth mt-2"
                        />
                        <button className="btn__form" type="submit">
                            {loading ? 'Carregando...' : 'Entrar'}
                        </button>
                    </Form>
                    <Link to="/cadastro">
                        <input
                            type="button"
                            className="input__rotaCadastro"
                            value="cadastre-se"
                        />
                    </Link>
                </div>
            </Wrapper>
        </>
    );
}
