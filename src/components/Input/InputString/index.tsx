import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";

import "./style.scss";

import { InputStringProps } from "./index.types";

const ERROR = "ERROR";
const VALID = "VALID";

const InputString = (props: InputStringProps) => {
    const { id, label, placeholder, max } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [valid, setValid] = useState<string>("");
    
    const handleOnBlur = () => {
        console.log("blur del campo " + id);
        if(!ref.current || (max && (ref.current.value.length > max))) {
            setValid(ERROR);
        } else {
            setValid(VALID);
        }
    }

    return <Form.Group className={`mb-3 ${valid}`}>
        <Form.Label>{label}</Form.Label>
        <Form.Control 
            className={`${valid}`}
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