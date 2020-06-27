import React from 'react';
import './Cadastro.css';

const Cadastro = () => {
    return(
        <section className="section__cadastro">
                <form action="">
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" />
                    </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" />
                </div>
                    </form>
        </section>

    )
}

export default Cadastro;