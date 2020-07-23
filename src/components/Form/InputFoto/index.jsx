import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import api from '../../../services/api';

import { Container } from './styles';

function InputFoto() {
    const { registerField } = useField('file_id');
    const [file, setFile] = useState(null);
    // const [ prewvew, setPreview] = useState()
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'file_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref, registerField]);

    async function handleChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);

        const { id } = response.data;

        setFile(id);
    }

    return (
        <Container>
            <label htmlFor="foto">
                <input
                    type="file"
                    id="foto"
                    accept="image/*"
                    data-file={file}
                    onChange={handleChange}
                />
            </label>
        </Container>
    );
}

export default InputFoto;
