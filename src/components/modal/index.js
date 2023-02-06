import React, { useContext } from "react";
import { ModalContext } from "../../App";
import "./style.css";

function Modal() {
    const {show, src} = useContext(ModalContext);

    return show && 
    <div>
        <img src={src} alt="modal image" />
    </div>
}

export default Modal;