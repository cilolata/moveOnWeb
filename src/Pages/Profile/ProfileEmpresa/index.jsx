/* eslint-disable no-unused-vars */
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

import { ProfileEmpresaStyle } from './styles';

function ProfileEmpresa() {
    const profile = useSelector((state) => state.user);
    const dados = useSelector((state) => state.getEmpresa.empresa);
    const endereco = useSelector((state) => state.address.getAddress);

    const { nome, id } = profile.profile;
    const formRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const razaoSocial = dados.map((d) => d.razao_social);
    const cnpj = dados.map((d) => d.cnpj);

    const initialData = {
        nome,
        id,
        cnpj,
        razao_social: razaoSocial,
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
        <ProfileEmpresaStyle>
            {/* <div className="d-flex flex-column">
                {dados.length === 0 ? (
                    <>
                        <div>
                            <input type="checkbox" defaultChecked={checked} />
                            <label className="ml-3">Cadastro Completo</label>
                        </div>
                    </>
                ) : (
                    <div>
                        <input type="checkbox" defaultChecked={!checked} />
                        <label className="ml-3">Cadastro Completo</label>
                    </div>
                )}

                {endereco.length === 0 ? (
                    <div>
                        <input type="checkbox" defaultChecked={checked} />
                        <label className="ml-3">
                            Cadastro Endereço Completo
                        </label>
                        <button
                            type="button"
                            className="ml-2"
                            onClick={() => setVisible(!visible)}
                        >
                            Completar
                        </button>
                    </div>
                ) : (
                    <div>
                        <input type="checkbox" defaultChecked={!checked} />
                        <label className="ml-3">
                            Cadastro Endereço Completo
                        </label>
                    </div>
                )}
            </div> */}

            <Form
                className="form__cadastro"
                onSubmit={handleSubmit}
                initialData={initialData}
                ref={formRef}
            >
                <div className="d-flex flex-wrap">
                    <div className="container__label m-3">
                        <label>Nome</label>
                        <Input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            title="Nome"
                        />
                    </div>

                    <div className="container__label m-3">
                        <label>Razão Social</label>

                        <Input
                            name="razao_social"
                            placeholder="Razão Social"
                            title="razão social"
                            type="text"
                        />
                    </div>

                    <div className="container__label m-3">
                        <label>CNPJ</label>

                        <Input
                            type="text"
                            name="cnpj"
                            placeholder="CNPJ"
                            title="CNPJ"
                        />
                    </div>

                    <Input type="hidden" name="id" />
                </div>
                <button className="btn__cadastro m-3" type="submit">
                    Salvar
                </button>
            </Form>
            <CadastroEndereco />
        </ProfileEmpresaStyle>
    );
}

export default ProfileEmpresa;
