import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";

import "./style.scss";

import { InputStringProps } from "./index.types";

const ERROR = "ERROR";
const VALID = "VALID";
const REQUIRED = "REQUIRED";

const InputString = (props: InputStringProps) => {
    const [used, setUsed] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>(null);
    const [valid, setValid] = useState<string>("");
    const { id, label, placeholder, max , required } = props;
    
    const handleOnChange = () => {
        setValid("");
        const { value } = ref.current || { value: "" };
        const hasValue = value.trim().length > 0
        setUsed(hasValue)
    }

    const handleOnBlur = () => {
        console.log("blur del campo " + id);
        const { value } = ref.current || { value: "" };
        let validation = VALID;
        if(required && value.length === 0) {
            validation = REQUIRED;
        } else if(max && value.length > max) {
            validation = ERROR;
        } 
        setValid(validation);
        if(props.dispatch && props.action) {
            const payload = {
                value,
                valid: validation === VALID
            };
            props.dispatch({type: props.action, payload });
        }
    }
    const className = ((used && !required) || required) && valid;
    return <Form.Group className={`mb-3 p-2 ${className}`}>
        <Form.Label>{label}{required && '*'}</Form.Label>
        <Form.Control 
            className={`${className}`}
            onChange={() => handleOnChange()}
            onBlur={() => handleOnBlur()}
            ref={ref}
            id={id}
            type="text" 
            placeholder={placeholder}
        />
        { ((used && !required) || required) && valid === VALID && <Form.Control.Feedback style={{display: "block"}}>Corretto</Form.Control.Feedback> }
        { valid === ERROR && <Form.Control.Feedback style={{display: "block"}} type="invalid">Errore</Form.Control.Feedback> }
        { valid === REQUIRED && <Form.Control.Feedback style={{display: "block"}} type="invalid">Richiesto</Form.Control.Feedback> }
    </Form.Group>
};

export default InputString;