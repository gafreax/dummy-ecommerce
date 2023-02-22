import React from "react";

import Button from "../Button";
import Carousel from "../Carousel";
import Description from "../Description";

import "./style.css";

function Card({ product, imageHandler } ) {
  const {description, id, images } = product;
  
  return (
    <div className="myCard card g-1 col col-4 col-xl-3 m-1">
      <Carousel images={images} onClick={() => {}} id={id} />
      <div className="card-body">
        <Description>{description}</Description>
        <Button onClick={e => imageHandler()}>Vedi immagini</Button>
      </div>
    </div>
  );
}

export default Card;
