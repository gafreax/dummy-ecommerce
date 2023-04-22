import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";

import "./style.scss";
import { InRangeProps, InputNumberProps } from "./index.types";

const ERROR = "ERROR";
const VALID = "VALID";

const isInRange = (props: InRangeProps) => {
    const { value, max } = props;
    const parsedValue = typeof value === "string" ? parseInt(value) : value;
    return parsedValue <= max && parsedValue >= 0;
}

const InputNumber = (props: InputNumberProps) => {
    const { id, label, placeholder, max } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [valid, setValid] = useState<string>("");

    const handleOnBlur = () => {
        const isNumber = ref.current && !isNaN(parseInt(ref.current.value));
        if(!isNumber ) {
            setValid(ERROR);
        } else if (max && (ref.current && !isInRange({ value: ref.current.value, max}))) {
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

export default InputNumber;