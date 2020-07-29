/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';

const SelectForm = ({ name, ...rest }) => {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            getValue: (ref) => {
                if (rest.isMulti) {
                    if (!ref.state.value) {
                        return [];
                    }
                    return ref.state.value.map((option) => option.value);
                }
                if (!ref.state.value) {
                    return '';
                }
                return ref.state.value.value;
            },
        });
    }, [fieldName, registerField, rest.isMulti]);

    return (
        <ReactSelect
            defaultValue={defaultValue}
            ref={selectRef}
            classNamePrefix="react-select"
            {...rest}
        />
    );
};

export default SelectForm;
