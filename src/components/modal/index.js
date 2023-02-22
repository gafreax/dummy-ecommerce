import React from "react";

import Carousel from "../Carousel/index.js";

import "./style.css";

function Modal({modalState: {show, images}, setModalState}) {
    const handleCloseModal = () => {
        setModalState({ show: false });
      };

    return show && <>
        <Carousel images={images} onClick={ handleCloseModal }  id="modal" /> 
    </>
}

export default Modal;