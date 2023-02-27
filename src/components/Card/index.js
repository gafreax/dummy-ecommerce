import React from "react";

import Button from "../Button";
import Carousel from "../Carousel";
import Description from "../Description";

import "./style.css";

function Card({ product, imageHandler }) {
  const { description, id, images } = product;
  console.log("card", product);
  return (
    product && (
      <div className="card g-1 m-1 col-4">
        <Carousel images={images} onClick={() => {}} id={id} />
        <div className="card-body">
          <Description>{description}</Description>
          <Button onClick={(e) => imageHandler()}>Vedi immagini</Button>
        </div>
      </div>
    )
  );
}

export default Card;
