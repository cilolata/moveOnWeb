/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';

import Dashboard from '../../Pages/Dashboard';

function HomeRoute() {
    const user = useSelector((state) => state.user);
    const { id } = user.profile;
    const [empresaId, setEmpresaId] = useState();
    const [aparelho, setAparelho] = useState([]);

    useEffect(() => {
        async function loadEmpresa() {
            const response = await api.get('empresas');
            const empresa = response.data.filter((e) => e.user_id === id);
            const emp = empresa.map((emId) => setEmpresaId(emId.id));
        }
        loadEmpresa();
    }, [id]);

    useEffect(() => {
        async function loadAparelho() {
            const response = await api.get('aparelhos');
            const ap = response.data.filter((i) => i.empresa_id === empresaId);
            setAparelho(ap);
        }
        loadAparelho();
    }, [empresaId]);

    return <Dashboard aparelho={aparelho} />;
}

export default HomeRoute;
