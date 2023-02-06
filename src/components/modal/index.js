import React from "react";

import "./style.css";

function Modal({modalState: {show, src}, onClick}) {
    return show && 
    <div>
        <img src={src} alt="modal image" onClick={onClick} />
    </div>
}

export default Modal;