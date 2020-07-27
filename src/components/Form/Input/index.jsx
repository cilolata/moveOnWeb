/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { InputForm } from './style';

const Input = ({ name, ...rest }) => {
    const inputRef = useRef(null);
    const {
        fieldName,
        registerField,
        error,
        clearError,
        defaultValue,
    } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <>
            <InputForm
                ref={inputRef}
                onFocus={clearError}
                defaultValue={defaultValue}
                {...rest}
            />
            {error && (
                <span
                    style={{
                        color: '#f00',
                        fontSize: '0.7rem',
                        padding: '2px 0',
                    }}
                >
                    {error}
                </span>
            )}
        </>
    );
};

export default Input;
