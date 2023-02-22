import React from "react";

import Carousel from "../Carousel/index.js";

import "./style.css";

function Modal({ modalState: { show, images }, setModalState }) {
  const handleCloseModal = () => {
    setModalState({ show: false });
  };

  return (
    show && (
<div className="modal fade show modal-xl"  id="bsModal" tabIndex={"-1"} aria-labelledby="bsModalLabel" style={{display: "block"}} aria-modal="true" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-4" id="bsModalLabel">Full screen modal</h1>
        <button type="button" onClick={handleCloseModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       { <Carousel
            images={images}
            onClick={handleCloseModal}
            id="modal"
          /> }
      </div>
      <div className="modal-footer">
        <button onClick={handleCloseModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>))
}

export default Modal;
