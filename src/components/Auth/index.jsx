import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Input from '../Input';
import { signInRequest } from '../../store/modules/auth/actions';

import { Wrapper } from './style';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .min(8, 'A senha deve conter no mínimo 8 caracteres')
        .required('A senha é obrigatória'),
});

export default function Auth() {
    const dispatch = useDispatch();

    const handleSubmit = ({ email, password }) => {
        dispatch(signInRequest(email, password));
    };

    return (
        <>
            <Wrapper>
                <button type="button" className="dropbtn">
                    Entrar
                </button>
                <div className="dropdown-content">
                    <Form schema={schema} onSubmit={handleSubmit}>
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
                            // eslint-disable-next-line react/jsx-no-comment-textnodes
                        />
                        <button className="btn__form" type="submit">
                            Entrar
                        </button>
                    </Form>
                </div>
            </Wrapper>
        </>
    );
}
