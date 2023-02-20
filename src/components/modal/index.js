import React, { useState } from "react";

import "./style.css";

function Modal({modalState: {show, src}, setModalState}) {
    const [imageIndex, setImageIndex] = useState(0);
    const handleImageChange = (index) => {
        setImageIndex(index);
    }

    // todo: proviamo a farne un componmente
    const generateNavBar = () => {
        return src.map((item, index) => 
            <li class="page-item" key={item}>
                <button class="page-link" href="#" key={item} onClick={() => handleImageChange(index)}>{index}</button>
            </li>
        )
    }
    return show && <>
        <img className="rounded mx-auto d-block" src={src[imageIndex]} alt={imageIndex} onClick={() => setModalState({show:false}) } />
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
        {generateNavBar()}
        </ul>
    </nav>
        
    </>
}

export default Modal;