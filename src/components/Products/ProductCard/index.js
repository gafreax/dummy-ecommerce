import React from "react";
import { CartPlus } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { hideModal, showModal } from "../../../store/dummyjson/actions";

import "./style.css";

import Button from "../../Button";
import Carousel from "../../Carousel";
import Description from "../../Description/index.tsx";


function ProductCard({ product, setCart }) {
  const { description, id, images, title } = product;
  const dispatch = useDispatch();
  const modal = useSelector(store => store.modal);

  const addToCart = () => {
    setCart({id, title});
  }

  const imageHandler = () => {
    if(modal.show) {
      dispatch(hideModal());
    } else {
      dispatch(showModal(images));
    }
  }

  return (
    <Card className="m-1">
      <Carousel images={images} onClick={() => {}} id={id} />
      <Card.Body>
        <Description>{description}</Description>
        <Button onClick={(e) => imageHandler()}>Vedi immagini</Button>
        <Button onClick={(e) => addToCart()}><CartPlus />Aggiungi</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
