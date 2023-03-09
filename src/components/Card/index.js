import React from "react";
import { Col } from "react-bootstrap";

import Button from "../Button";
import Carousel from "../Carousel";
import Description from "../Description";

import "./style.css";

function Card({ product, imageHandler }) {
  const { description, id, images } = product;
  console.log("card", product);
  return (
    product && (
      <Col xs="3">
        <Carousel images={images} onClick={() => {}} id={id} />
        <div className="card-body">
          <Description>{description}</Description>
          <Button onClick={(e) => imageHandler()}>Vedi immagini</Button>
        </div>
      </Col>
    )
  );
}

export default Card;
