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
    const { id, label, placeholder, max } = props;
    
    const handleOnBlur = () => {
        console.log("blur del campo " + id);
        const { value } = ref.current || { value: "" };
        let validation = VALID;
        if(max && value.length > max) {
            validation = ERROR;
        } else if(used && value.length === 0) {
            validation = REQUIRED;
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

    return <Form.Group className={`mb-3 p-2 ${valid}`}>
        <Form.Label>{label}</Form.Label>
        <Form.Control 
            className={`${valid}`}
            onFocus={() => setUsed(true)}
            onBlur={() => handleOnBlur()}
            ref={ref}
            id={id}
            type="text" 
            placeholder={placeholder}
        />
        { valid === VALID && <Form.Control.Feedback style={{display: "block"}}>Corretto</Form.Control.Feedback> }
        { valid === ERROR && <Form.Control.Feedback style={{display: "block"}} type="invalid">Errore</Form.Control.Feedback> }
    </Form.Group>
};

export default InputString;