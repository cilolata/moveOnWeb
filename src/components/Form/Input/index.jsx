import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

// eslint-disable-next-line import/extensions
import { InputForm } from './style.jsx';

// eslint-disable-next-line react/prop-types
const Input = ({ name, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, registerField, error, clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <div>
            <InputForm
                className="input__cadastro"
                ref={inputRef}
                onFocus={clearError}
                // eslint-disable-next-line react/jsx-props-no-spreading
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
        </div>
    );
};

export default Input;
