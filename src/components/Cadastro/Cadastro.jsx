import React from 'react';
import { Form } from '@unform/web';
import './Cadastro.css';
import "../../css/global.css"
import Input from './Input';



const initialData = {
  email: "fulano@provedor.com",
}

const Cadastro = () => {
  const handleSubmit = (data) => {
    console.log(data)
  }

    return(
      <section className="section__cadastro">
        <div className="cadastro">
        <Form initialData={initialData} onSubmit={handleSubmit}>
          <Input name="name"/>
          <Input type="email" name="email"/>
          <Input type="password" name="password"/>

          <button type="submit">Enviar</button>
        </Form>
        </div>

      </section>

    )
}

export default Cadastro;