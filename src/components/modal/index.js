function Modal({show,src}) {
    return show && <img className="modal" src={src} alt="image" />;
}

export default Modal;