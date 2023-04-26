import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";

import "./style.scss";
import { InRangeProps, InputNumberProps } from "./index.types";

const ERROR = "ERROR";
const VALID = "VALID";
const REQUIRED = "REQUIRED";

const isInRange = (props: InRangeProps) => {
    const { value, max } = props;
    const parsedValue = typeof value === "string" ? parseInt(value) : value;
    return parsedValue <= max && parsedValue >= 0;
}

const InputNumber = (props: InputNumberProps) => {
    const [used, setUsed] = useState<boolean>(false);
    const { id, label, placeholder, max } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [valid, setValid] = useState<string>("");

    const handleOnBlur = () => {
        const isNumber = ref.current && !isNaN(parseInt(ref.current.value));
        const { value } = ref.current || { value: "" };
        const notInRange = max &&  !isInRange({ value, max});
        let validation = VALID;
        if(!isNumber || notInRange ) {
            validation = ERROR;
        } else if(used && value.length === 0) {
            validation = REQUIRED;
        }
        setValid(validation);
        if(props.dispatch && props.action) {
            const payload = {
                value: parseInt(value),
                valid: validation === VALID
            };
            props.dispatch({type: props.action, payload });
        }
    }


    return <Form.Group className={`mb-3 p-2 ${valid}`}>
        <Form.Label>{label}</Form.Label>
        <Form.Control 
            className={`${valid}`}
            onBlur={() => handleOnBlur()}
            onFocus={() => setUsed(true)}
            ref={ref}
            id={id}
            type="text" 
            placeholder={placeholder}
        />
        { valid === VALID && <Form.Control.Feedback style={{display: "block"}}>Corretto</Form.Control.Feedback> }
        { valid === ERROR && <Form.Control.Feedback style={{display: "block"}} type="invalid">Errore</Form.Control.Feedback> }
    </Form.Group>
};

export default InputNumber;