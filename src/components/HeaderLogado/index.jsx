/* eslint-disable react/button-has-type */
import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdArrowDropDown } from 'react-icons/md';
import { ContainerHeader } from './style';
import { signOut } from '../../store/modules/auth/actions';

function HeaderLogado() {
    const user = useSelector((state) => state.user);
    const { id, type, nome } = user.profile;
    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <ContainerHeader>
            <div className="menu__dropdown">
                <strong className="w-100">{nome}</strong>
                <MdArrowDropDown
                    style={{
                        color: '#fff',
                        fontSize: '30px',
                        marginRight: '60px',
                    }}
                />
            </div>
            <div className="dropdown">
                <div className="dropdown__content">
                    {type === '0' ? (
                        <Link to={`/profile/${id}`}>Meu perfil</Link>
                    ) : (
                        <>
                            <Link to={`/profile/${id}`}>Meu perfil</Link>
                            <Link to={`/dashboard/${nome}`}>
                                Painel de Controle
                            </Link>
                            <Link to={`/novoanuncio/${nome}`}>
                                Novo Anúncio
                            </Link>
                        </>
                    )}
                    <button type="button" onClick={handleSignOut}>
                        Sair
                    </button>
                </div>
            </div>
        </ContainerHeader>
    );
}

export default HeaderLogado;
