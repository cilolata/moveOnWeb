/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../Form/Input';
import { signInRequest } from '../../store/modules/auth/actions';

import { Wrapper } from './style';

// eslint-disable-next-line react/prop-types
export default function Auth() {
    const formRef = useRef(null);

    // eslint-disable-next-line react/prop-types
    const dispatch = useDispatch();

    const handleSubmit = async (data, { email, password }) => {
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
        <>
            <Wrapper>
                <button type="button" className="dropbtn">
                    Entrar
                </button>
                <div className="dropdown-content">
                    <Form onSubmit={handleSubmit} ref={formRef}>
                        <Input
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            title="E-mail"
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Senha"
                            title="Senha"
                        />
                        <button className="btn__form" type="submit">
                            Entrar
                        </button>
                    </Form>
                    <Link to="/cadastro">
                        <input
                            type="button"
                            className="input__auth"
                            value="cadastre-se"
                        />
                    </Link>
                </div>
            </Wrapper>
        </>
    );
}
