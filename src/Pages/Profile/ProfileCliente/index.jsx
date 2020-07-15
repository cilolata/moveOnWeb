/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../../../components/Form/Input';

import { ProfileContainer } from './style';

function ProfileCliente() {
    const formRef = useRef(null);

    const handleSubmit = async (data) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                sobrenome: Yup.string().required('O sobrenome é obrigatório'),
                rua: Yup.string().required('A rua é obrigatória'),
                numero: Yup.number().required('O número é obrigatório'),
                bairro: Yup.string().required('O bairro é obrigatório'),
                cidade: Yup.string().required('A cidade é obrigatória'),
                uf: Yup.string().min(2).required('O UF é obrigatório'),
                telefone: Yup.number().required('O telefone é obrigatório'),
                celular: Yup.number().required('O celular é obrigatório'),
                cep: Yup.number().required('O Cep é obrigatório'),

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
                        <label>Rua: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            name="rua"
                            placeholder="Rua"
                            title="Rua"
                            type="text"
                        />
                    </div>
                </div>
                <div className="div__field">
                    <div className="div__label">
                        <label>Número: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            name="numero"
                            placeholder="Número"
                            title="numero"
                            type="text"
                        />
                    </div>
                </div>
                <div className="div__field">
                    <div className="div__label">
                        <label>Bairro: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            name="bairro"
                            placeholder="Bairro"
                            title="bairro"
                            type="text"
                        />
                    </div>
                </div>
                <div className="div__field">
                    <div className="div__label">
                        <label>Cidade: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            name="cidade"
                            placeholder="Cidade"
                            title="cidade"
                            type="text"
                        />
                    </div>
                </div>
                <div className="div__field">
                    <div className="div__label">
                        <label>UF: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            name="uf"
                            title="estado"
                            placeholder="UF"
                            type="text"
                            max="2"
                        />
                    </div>
                </div>
                <div className="div__field">
                    <div className="div__label">
                        <label>CEP: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            name="cep"
                            placeholder="xxxxx-xxx"
                            title="cep"
                            min="8"
                            max="8"
                            type="text"
                        />
                    </div>
                </div>
                <div className="div__field">
                    <div className="div__label">
                        <label>Telefone: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            name="telefone"
                            title="telefone"
                            placeholder="dd - xxxxxxxxx"
                            type="tel"
                            min="11"
                            max="13"
                        />
                    </div>
                </div>
                <div className="div__field">
                    <div className="div__label">
                        <label>Celular: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            name="celular"
                            title="celular"
                            placeholder="dd - xxxxxxxxx"
                            type="tel"
                            min="11"
                            max="13"
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
                            placeholder="xxx.xxx.xxx-xx"
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
