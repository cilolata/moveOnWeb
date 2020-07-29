import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import api from '../../../services/api';

import { Container } from './styles';

function InputFoto() {
    const { defaultValue, registerField } = useField('file_id');
    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);
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

        const { id, url } = response.data;

        setFile(id);
        setPreview(url);
    }

    return (
        <>
            <Container>
                <label htmlFor="file_id">
                    carregue uma foto aqui
                    <img src={preview} alt="" />
                    <input
                        type="file"
                        id="file_id"
                        accept="image/*"
                        data-file={file}
                        onChange={handleChange}
                        ref={ref}
                    />
                </label>
            </Container>
        </>
    );
}

export default InputFoto;
