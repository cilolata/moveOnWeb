/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';

import Home from '../../Pages/Home';
import { loadAnuncios } from '../../store/modules/anuncios/actions';

function HomeRoute() {
    const dispatch = useDispatch();

    const [aparelho, setAparelho] = useState([]);
    dispatch(loadAnuncios(aparelho));

    useEffect(() => {
        async function loadEmpresa() {
            const response = await api.get('aparelhos');
            const ap = response.data.map((a) => a);
            setAparelho(ap);
        }
        loadEmpresa();
    }, []);

    return <Home aparelho={aparelho} />;
}

export default HomeRoute;
