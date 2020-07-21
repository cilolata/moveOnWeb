/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React, { useRef } from 'react';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Input from '../../../components/Form/Input';
import { profileRegisterEmpresa } from '../../../store/modules/profileEmpresa/actions';

import { ContainerEmpresa } from './style';

function ProfileEmpresa() {
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = async (data, { reset }) => {
        dispatch(profileRegisterEmpresa(data));
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                razao_social: Yup.string().required(
                    'A razão social é obrigatória'
                ),
                cnpj: Yup.number().min(14).required('O cnpj é obrigatório'),
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
        <ContainerEmpresa>
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
                        <label>Razão Social: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            name="razao_social"
                            placeholder="Razão Social"
                            title="razão social"
                            type="text"
                        />
                    </div>
                </div>

                <div className="div__field">
                    <div className="div__label">
                        <label>CNPJ: </label>
                    </div>
                    <div className="div__input">
                        <Input
                            type="text"
                            name="cnpj"
                            placeholder="xxxxxxxxxxxxxx"
                            title="CNPJ"
                        />
                    </div>
                </div>
                <button className="btn__form" type="submit">
                    Salvar
                </button>
            </Form>
        </ContainerEmpresa>
    );
}

export default ProfileEmpresa;
