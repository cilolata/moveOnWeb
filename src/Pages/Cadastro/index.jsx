import React, {useRef} from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';


import './style.css';
import "../../css/global.css"

import Input from '../../components/Input';

const Cadastro = () => {
  const formRef = useRef(null);

  const  handleSubmit = async(data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório"),
        password: Yup.string()
        .min(8, "A senha deve conter no mínimo 8 caracteres")
        .required("A senha é obrigatória")
      })
  
    await schema.validate(data, {
      abortEarly: false,
    })

    formRef.current.setErrors({})
    reset();
  } catch(error) {
    if(error instanceof Yup.ValidationError){
      const errorMessages = {};

      error.inner.forEach(error => {
        errorMessages[error.path] = error.message
      })

      formRef.current.setErrors(errorMessages)
    }
  }
}


    return(
      <section className="section__cadastro">
        <div className="cadastro">
          <h1>CADASTRO</h1>
          <div className="container__cadastro">
            <Form classname="form__cadastro" ref={formRef}  onSubmit={handleSubmit}>
              <p>Nome</p>
              <Input name="name"/>
              <p>Email</p>
              <Input name="email"/>
              <p>Senha</p>
              <Input type="password" name="password"/>
              <p>a senha precisa ter 8 caracteres</p>
              <button className="btn__cadastro" type="submit">Enviar</button>
            </Form>
          </div>
        </div>

      </section>

    )
}

export default Cadastro;