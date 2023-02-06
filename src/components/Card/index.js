import React from "react";

import Button from "../Button";
import Description from "../Description";
import Image from "../Image";

import "./style.css";

function Card({ product, imageHandler } ) {
  const {description, title, thumbnail } = product;
  
  return (
    <div className="myCard card g-1 col col-4 col-xl-3 m-1">
      <Image
        title={title}
        src={thumbnail}
      />
      <div className="card-body">
        <Description>{description}</Description>
        <Button onClick={e => imageHandler()}>Vedi immagini</Button>
      </div>
    </div>
  );
}

export default Card;
