import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap"

import "./style.scss";

// todo:
//   "id": 1,
//   "title": "iPhone 9",
//   "description": "An apple mobile which is nothing like apple",
//   "price": 549,
//   "discountPercentage": 12.96,
//   "rating": 4.69,
//   "stock": 94,
//   "brand": "Apple",
//   "category": "smartphones",
//   "thumbnail": "...",
//   "images": ["...", "...", "..."]



const AddProduct = () => {
    const refName = useRef("");
    const refDescription = useRef("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(refName.current) {
            console.log(refName.current.value);
        }
        if(refDescription.current) {
            console.log(refDescription.current.value);
        }
    };

    return <Container className="AppProduct">
        <h1>Aggiungi un articolo</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="product-name">
                <Form.Label>Product Name</Form.Label>
                <Form.Control 
                    ref={refName}
                    id="product-name"
                    type="text" 
                    placeholder="Inserisci il nome del prodotto"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="product-description">
                <Form.Label>Product Description</Form.Label>
                <Form.Control 
                    ref={refDescription}
                    id="product-description"
                    type="text" 
                    placeholder="Inserisci la descrizione del prodotto"
                />
            </Form.Group>
            <Button variant="primary" type="submit">Aggiungi</Button>
        </Form>
    </Container>;
};

export default AddProduct;