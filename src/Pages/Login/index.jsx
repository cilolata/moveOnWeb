import React from 'react';
import { Form } from '@unform/web';
import Input from '../../components/Input';

import './style.css';

const Login = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login">
      <div className="login__container">
      <Form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <Input name="email" type="email" placeholder="E-mail" />
        <label>Senha</label>
        <Input name="password" type="password" placeholder="Senha"/>
        <button type="submit">Entrar</button>
      </Form>
      </div>
    </div>
  );
}

export default Login;
