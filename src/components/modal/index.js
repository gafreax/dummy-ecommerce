import React, { useState } from "react";

import Carousel from "../Carousel/index.js";

import "./style.css";

function Modal({modalState: {show, images}, setModalState}) {
    const [imageIndex, setImageIndex] = useState(0);

    // // todo: proviamo a farne un componmente
    // const generateNavBar = () => {
    //     return images.map((item, index) => 
    //         <li className="page-item" key={item}>
    //             <button className="page-link" href="#" key={item} onClick={() => setImageIndex(index)}>{index}</button>
    //         </li>
    //     )
    // }

    return show && <>
        <Carousel images={images} onClick={() => setModalState({show:false}) } />
        
    </>
}

export default Modal;