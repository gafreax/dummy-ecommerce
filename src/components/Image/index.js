import React from "react";

import "./style.css";

function Image({src, title}) {
    const imageDescription = title? title :"Immagine";
    return <img className="card-img-top p-2" src={src} alt={imageDescription} title={imageDescription}/>
}

export default Image;