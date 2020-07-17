import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ContainerHeader } from './style';
import { signOut } from '../../store/modules/auth/actions';

function HeaderLogado() {
    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
    }
    return (
        <ContainerHeader>
            <strong>Maria</strong>
            <Link to="/profilecliente/:name">Meu perfil</Link>
            <button type="button" onClick={handleSignOut}>
                Sair
            </button>
        </ContainerHeader>
    );
}

export default HeaderLogado;
