/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';

import Home from '../../Pages/Home';
import { loadAnuncios } from '../../store/modules/anuncios/actions';

function HomeRoute() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadEmpresa() {
            const response = await api.get('aparelhos');
            const ap = response.data.map((a) => a);
            dispatch(loadAnuncios(ap));
        }
        loadEmpresa();
    }, [dispatch]);

    return <Home />;
}

export default HomeRoute;
