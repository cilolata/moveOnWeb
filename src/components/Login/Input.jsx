import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

function Input({name, label, ...rest}) {
  const inputRef = useRef(null)

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })

  }, [fieldName, registerField]);

  return (
    <div>
      <label htmlFor={name}>{label} </label>
      <input type="text" ref={inputRef} defaultValue={defaultValue} {...rest}/>
      {error && <span style={{ color: "#ff0000" }}>{error}</span>}
    </div>
  )
  
}

export default Input;

