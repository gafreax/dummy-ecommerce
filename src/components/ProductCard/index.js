import React from "react";
import { Card } from "react-bootstrap";

import Button from "../Button";
import Carousel from "../Carousel";
import Description from "../Description";

import "./style.css";

function ProductCard({ product, imageHandler }) {
  const { description, id, images } = product;
  return (
    <Card style={{ padding: "1rem", marginBottom: "1rem" }}>
      <Carousel images={images} onClick={() => {}} id={id} />
      <Card.Body>
        <Description>{description}</Description>
        <Button onClick={(e) => imageHandler()}>Vedi immagini</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
