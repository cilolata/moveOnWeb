import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerHeader } from './style';
import { signOut } from '../../store/modules/auth/actions';

function HeaderLogado() {
    const user = useSelector((state) => state.user);
    const { id, type } = user.profile;
    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <ContainerHeader>
            <strong></strong>
            {type === 0 ? (
                <Link to={`/profile/${id}`}>Meu perfil</Link>
            ) : (
                <Link to={`/profile/${id}`}>Meu perfil</Link>
            )}
            <button type="button" onClick={handleSignOut}>
                Sair
            </button>
        </ContainerHeader>
    );
}

export default HeaderLogado;
