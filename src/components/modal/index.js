import React, { useState } from "react";
import Button from "../Button";

import "./style.css";

function Modal({modalState: {show, src}, onClick}) {
    const [imageIndex, setImageIndex] = useState(0);
    
    return show && <>
        <img src={src[imageIndex]} alt={imageIndex} onClick={onClick} />
        {src.map((item, index) => <Button key={item} onClick={setImageIndex(index)}>{index}</Button>)}
    </>
}

export default Modal;