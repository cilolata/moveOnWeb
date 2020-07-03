import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import * as Yup from 'yup';
import api from '../../services/api';


import "./style.css";

const Header = () =>{
    const history = useHistory();
    const formRef = useRef(null);
    const handleSubmit = async (data,  { reset }) => {
    
      try {
        
        const schema = Yup.object().shape({
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
  
      const response = await api.post('sessions', data)
  
      if(response.data){
        localStorage.setItem('token', response.data.token);
        history.push('/dashboard')
      }
  
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
        <>
            <div className="header__container">
                <div className="header__container--brand"> 
                    <div className="header__name--brand">
                        <Link to="/" style={{textDecoration: "none", color:"#fff"}}>
                            MoveOn
                        </Link>
                    </div>
                </div>
                <nav className="header__nav">
                    <ul className="header__ul">
                        <li className="header__li"><a href="">Produtos</a></li>
                        <li className="header__li"><a href="">Empresas</a></li>
                        <li className="header__li"><a href="">Alugar</a></li>
                        <li className="header__li"><Link to="/cadastro">Cadastrar</Link></li>    
                    </ul>
                </nav>
                <div class="dropdown">
                <button class="dropbtn">Entrar</button>
                    <div class="dropdown-content">
                            <Form onSubmit={handleSubmit}>
                                <label>E-mail</label>
                                <Input name="email" type="email" placeholder="E-mail" />
                                <label>Senha</label>
                                <Input name="password" type="password" placeholder="Senha"/>
                                <button type="submit">Entrar</button>
                            </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;