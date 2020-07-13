/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { ContainerCheckbox } from './style';

const CheckboxInput = ({ name, options, ...rest }) => {
    const inputRefs = useRef([]);
    const { fieldName, registerField, error, clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRefs.current,
            getValue: (refs) => {
                return refs
                    .filter((ref) => ref.checked)
                    .map((ref) => ref.value);
            },
            clearValue: (refs) => {
                refs.forEach((ref) => {
                    ref.checked = false;
                });
            },
            setValue: (refs, values) => {
                refs.forEach((ref) => {
                    if (values.includes(ref.id)) {
                        ref.checked = true;
                    }
                });
            },
        });
    }, [fieldName, registerField]);

    return (
        <ContainerCheckbox>
            {options.map((option, index) => (
                <label htmlFor={option.id} key={option.id}>
                    <input
                        ref={(ref) => {
                            inputRefs.current[index] = ref;
                        }}
                        onFocus={clearError}
                        value={option.value}
                        type="checkbox"
                        id={option.id}
                        {...rest}
                    />
                    {option.label}
                </label>
            ))}
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
        </ContainerCheckbox>
    );
};
export default CheckboxInput;
