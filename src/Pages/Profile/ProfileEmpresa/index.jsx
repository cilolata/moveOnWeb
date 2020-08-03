/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../../components/Form/Input';
import { profileRegisterEmpresa } from '../../../store/modules/profileEmpresa/actions';
import CadastroEndereco from '../../../components/CadastroEndereco';

function ProfileEmpresa() {
    const [visible, setVisible] = useState(false);
    const profile = useSelector((state) => state.user);
    const { nome, id } = profile.profile;
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const initialData = {
        nome,
        id,
    };

    const handleSubmit = async (data, { reset }) => {
        dispatch(profileRegisterEmpresa(data));
        try {
            const schema = Yup.object().shape({
                nome: Yup.string().required('O nome é obrigatório'),
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
        <>
            <Form
                className="form__cadastro"
                onSubmit={handleSubmit}
                initialData={initialData}
                ref={formRef}
            >
                <Input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    title="Nome"
                />

                <Input
                    name="razao_social"
                    placeholder="Razão Social"
                    title="razão social"
                    type="text"
                />

                <Input
                    type="text"
                    name="cnpj"
                    placeholder="CNPJ"
                    title="CNPJ"
                />

                <Input type="hidden" name="id" />
                <button
                    className="btn__cadastro"
                    type="submit"
                    onClick={() => setVisible(!visible)}
                >
                    Salvar
                </button>
            </Form>
            {visible && <CadastroEndereco />}
        </>
    );
}

export default ProfileEmpresa;
