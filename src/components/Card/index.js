import React from "react";

import Button from "../Button";
import Carousel from "../Carousel";
import Description from "../Description";

import "./style.css";

function Card({ product, imageHandler }) {
  const { description, id, images } = product;
  return (
    <div style={{maxWidth: "40%", float: "left", margin: "8px" }}>
      <Carousel images={images} onClick={() => {}} id={id} />
      <div className="card-body">
        <Description>{description}</Description>
        <Button onClick={(e) => imageHandler()}>Vedi immagini</Button>
      </div>
    </div>
  );
}

export default Card;
