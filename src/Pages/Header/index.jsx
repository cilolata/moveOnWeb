/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../../components/Input';

import '../Dashboard';

// eslint-disable-next-line import/extensions
import { HeaderContainer } from './style.jsx';

const Header = () => {
    const formRef = useRef(null);

    const handleSubmit = async (data, { reset }) => {
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

                // eslint-disable-next-line no-shadow
                error.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });

                formRef.current.setErrors(errorMessages);
            }
        }
    };

    return (
        <HeaderContainer>
            <div className="header__container--brand">
                <div className="header__name--brand">
                    <Link
                        to="/"
                        style={{ textDecoration: 'none', color: '#fff' }}
                    >
                        MoveOn
                    </Link>
                </div>
            </div>
            <nav className="header__nav">
                <ul className="header__ul">
                    <li className="header__li">
                        <Link to="/">Produtos</Link>
                    </li>
                    <li className="header__li">
                        <Link to="/">Empresas</Link>
                    </li>
                    <li className="header__li">
                        <Link to="/">Alugar</Link>
                    </li>
                    <li className="header__li">
                        <Link to="/cadastro">Cadastrar</Link>
                    </li>
                </ul>
            </nav>
            <div className="dropdown">
                <button type="button" className="dropbtn">
                    Entrar
                </button>
                <div className="dropdown-content">
                    <Form onSubmit={handleSubmit} ref={formRef}>
                        <span>E-mail</span>
                        <Input name="email" type="email" placeholder="E-mail" />
                        <span>Senha</span>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Senha"
                        />
                        <button className="btn__form" type="submit">
                            Entrar
                        </button>
                    </Form>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;
