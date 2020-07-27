/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';

import Home from '../../Pages/Home';

function HomeRoute() {
    const user = useSelector((state) => state.user);

    const { id } = user.profile;
    const [aparelho, setAparelho] = useState([]);

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
