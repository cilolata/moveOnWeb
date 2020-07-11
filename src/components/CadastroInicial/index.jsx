/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import { SectionCadastro } from './style';

import Input from '../Input';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .min(8, 'A senha deve conter no mínimo 8 caracteres')
        .required('A senha é obrigatória'),
});

function CadastroInicial(props) {
    const { handleCloseModal } = props;

    const handleSubmit = async (data) => {
        // eslint-disable-next-line no-console
        console.tron.log(data);
    };

    return (
        <SectionCadastro>
            <div className="cadastro">
                <button className="btn__close" onClick={handleCloseModal}>
                    <IoIosClose className="icon__close" />
                </button>
                <h1 className="heading__cadastro">Faça o seu cadastro</h1>
                <p className="p__cadastro">ou entre com</p>
                <div className="container__cadastro">
                    <Form
                        schema={schema}
                        classname="form__cadastro"
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
                        <Link to="/cadastrocompleto">
                            <button className="btn__cadastro" type="submit">
                                Enviar
                            </button>
                        </Link>
                    </Form>
                </div>
            </div>
        </SectionCadastro>
    );
};

export default CadastroInicial;
