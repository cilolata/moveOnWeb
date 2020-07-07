import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import { signInRequest } from '../../store/modules/auth/actions';
// import * as Yup from 'yup';

import { Wrapper } from './style';

export default function Auth() {
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = async ({ email, password }) => {
        // eslint-disable-next-line no-undef
        dispatch(signInRequest(email, password));
    };

    //     try {
    //         const schema = Yup.object().shape({
    //             email: Yup.string()
    //                 .email('Digite um e-mail válido')
    //                 .required('O e-mail é obrigatório'),
    //             password: Yup.string()
    //                 .min(8, 'A senha deve conter no mínimo 8 caracteres')
    //                 .required('A senha é obrigatória'),
    //         });
    //         await schema.validate(data, {
    //             abortEarly: false,
    //         });

    //         formRef.current.setErrors({});
    //         reset();
    //     } catch (error) {
    //         if (error instanceof Yup.ValidationError) {
    //             const errorMessages = {};

    //             // eslint-disable-next-line no-shadow
    //             error.inner.forEach((error) => {
    //                 errorMessages[error.path] = error.message;
    //             });

    //             formRef.current.setErrors(errorMessages);
    //         }
    //     }
    // };
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
                </div>
            </Wrapper>
        </>
    );
}
