import React from 'react';
import { Form } from '@unform/web';
import Input from './Input';

import './login.css';

const Login = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container-login">
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha"/>
        <button type="submit">Entrar</button>
      </Form>
    </div>
  );
}

export default Login;
