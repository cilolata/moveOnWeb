/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';

import Home from '../../Pages/Home';
import { loadAnuncios } from '../../store/modules/anuncios/actions';
import { getEmpresa } from '../../store/modules/empresa/actions';
import { getAddress } from '../../store/modules/endereco/actions';

function HomeRoute() {
    const user = useSelector((state) => state.user);
    const { id } = user.profile;
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadEmpresa() {
            const response = await api.get('aparelhos');
            const ap = response.data.map((a) => a);
            dispatch(loadAnuncios(ap));
        }
        loadEmpresa();
    }, [dispatch]);

    useEffect(() => {
        async function loadEmpresa() {
            const response = await api.get('empresas');
            const empresaResponse = response.data.filter(
                (e) => e.user_id == id
            );
            const emp = empresaResponse.map((e) => e);
            dispatch(getEmpresa(emp));
        }

        loadEmpresa();
    }, [id, dispatch]);

    useEffect(() => {
        async function loadEmpresa() {
            const response = await api.get('enderecos');
            const enderecoResponse = response.data.filter(
                (b) => b.user_id == id
            );
            const endereco = enderecoResponse.map((end) => end);
            dispatch(getAddress(endereco));
        }

        loadEmpresa();
    }, [id, dispatch]);

    return <Home />;
}

export default HomeRoute;
