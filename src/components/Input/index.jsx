import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import "./style.css";

const Input = ({ name, ...rest }) => {
    const inputRef = useRef(null)
    const { fieldName, registerField, error, clearError } = useField(name);

    
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })

    }, [fieldName, registerField]);

    return(
        <div className="div__ipunt">
            <input className="input__cadastro" ref={inputRef}  onFocus={clearError} {...rest} />
             {error  && <span style={{color: '#f00', fontSize: "0.8rem"}}>{error}</span> }
        </div>
    )
}

export default Input;