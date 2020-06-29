import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";


const Input = ({ name, ...rest }) => {
    const inputRef = useRef(null)
    const { fieldName, registerField, defaultValue, error } = useField(name);

    
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })

    }, [fieldName, registerField]);

    return(
        <input ref={inputRef} {...rest}  defaultValue={defaultValue} />
    )
}

export default Input;