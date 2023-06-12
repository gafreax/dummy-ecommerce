import React from "react";
import { CartPlus } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { hideModal, showModal } from "../../../store/dummyjson/actions.js";
import { addToCart } from "../../../store/dummyjson/actions.js";

import "./style.css";

import Button from "../../Button/index.js";
import Carousel from "../../Carousel/index.js";
import Description from "../../Description/index.tsx";
import useCartStorage from "../../../hooks/useCartStorage.js";
import { ProductItem } from "../../../store/dummyjson/reducers/productReducer.types.ts";


function ProductCard({ description, id, images, title, price }: ProductItem) {
  const dispatch = useDispatch();
  const modal = useSelector((store:any) => store.modal);
  const [, setCartStorage] = useCartStorage(undefined);

  const handleClick = () => {
    const cart = window.localStorage.getItem("cart") || "";
    const cartJSON = JSON.parse(cart);
    const newCartItem = {id, title, price};
    if(cartJSON) {
      setCartStorage([...cartJSON, newCartItem]);
    } else {
      setCartStorage([newCartItem]);
    }
    dispatch(addToCart(newCartItem));
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
        <Description description={description} />
        <Button onClick={() => imageHandler()}>Vedi immagini</Button>
        <Button onClick={() => handleClick()}><CartPlus />Aggiungi</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
