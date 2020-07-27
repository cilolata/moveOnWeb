/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';

import Dashboard from '../../Pages/Dashboard';

function HomeRoute() {
    const user = useSelector((state) => state.user);

    const { id } = user.profile;
    const [aparelho, setAparelho] = useState([]);

    useEffect(() => {
        async function loadEmpresa() {
            const response = await api.get('aparelhos');
            const ap = response.data.filter((i) => i.empresa_id === id);
            setAparelho(ap);
        }
        loadEmpresa();
    }, [id]);

    return <Dashboard aparelho={aparelho} />;
}

export default HomeRoute;
