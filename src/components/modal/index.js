import "./style.css";

function Modal({show, src}) {
    return show && 
    <div>
        <img src={src} alt="modal image" />
    </div>
}

export default Modal;