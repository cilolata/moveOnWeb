/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../../components/Form/Input';

import { ProfileContainer } from './style';

function ProfileCliente() {
    const formRef = useRef(null);

    const handleSubmit = async (data) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                sobrenome: Yup.string().required('O nome é obrigatório'),
                cpf: Yup.string()
                    .min(11)
                    .max(11)
                    .required('O cpf é obrigatório'),
                date: Yup.date().required('A data de nascimento é obrigatório'),
                email: Yup.string().required('O e-mail é obrigatório'),
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
        <ProfileContainer>
            <h2>Cadastro</h2>
            <Form
                className="form__completo"
                onSubmit={handleSubmit}
                ref={formRef}
            >
                <div className="div__field">
                    <div className="div__label">
                        <label>Nome: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            title="Nome"
                        />
                    </div>
                </div>

                <div className="div__field">
                    <div className="div__label">
                        <label>Sobrenome: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            name="sobrenome"
                            placeholder="Sobrenome"
                            title="Sobrenome"
                            type="text"
                        />
                    </div>
                </div>
                <div className="div__field">
                    <div className="div__label">
                        <label>CPF: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            type="text"
                            name="cpf"
                            placeholder="CPF"
                            title="CPF"
                        />
                    </div>
                </div>
                <div className="div__field">
                    <div className="div__label">
                        <label>Data de Nascimento: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            type="Date"
                            name="date"
                            placeholder="Data de Nascimento"
                            title="Data de Nascimento"
                        />
                    </div>
                </div>
                <div className="div__field">
                    <div className="div__label">
                        <label>E-mail: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            title="E-mail"
                        />
                    </div>
                </div>
                <button className="btn__form" type="submit">
                    Salvar
                </button>
            </Form>
        </ProfileContainer>
    );
}

export default ProfileCliente;
