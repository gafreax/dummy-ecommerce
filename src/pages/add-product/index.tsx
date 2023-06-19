import React, { useReducer } from "react";
import { Button, Container, Form } from "react-bootstrap";

import { formReducer, initialState } from "./reducer.ts";

import "./style.scss";

import { FormState } from "./index.types.ts";

import InputString from "../../components/Input/InputString/index.tsx";
import InputNumber from "../../components/Input/InputNumber/index.tsx";

const AddProduct = () => {
    const [state, dispatch] = useReducer(formReducer, initialState as FormState);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { product } = state;
        const data = {
            brand: product?.brand?.value,
            category: product?.category?.value,
            description: product?.description?.value,
            discountPercentage: product?.discountPercentage?.value,
            price: product?.price?.value,
            rating: product?.rating?.value,
            stock: product?.stock?.value,
            title: product?.title?.value
        }
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(console.log);
    };

    return (
        <Container className="AppProduct">
            <h1>Aggiungi un articolo</h1>
            <Form onSubmit={handleSubmit}>
                <InputString
                    id={"product-title"}
                    label={"Nome del prodotto"}
                    placeholder={"Inserisci il nome del prodotto"}
                    max={30}
                    dispatch={dispatch}
                    action="SET_PRODUCT_TITLE"
                    required={true}
                />
                <InputString
                    id={"product-descripton"}
                    label={"Descrizione del prodotto"}
                    placeholder={"Inserisci la descrizione del prodotto"}
                    max={100}
                    dispatch={dispatch}
                    action="SET_PRODUCT_DESCRIPTION"
                />
                <InputNumber
                    id={"product-price"}
                    label={"Prezzo del prodotto"}
                    placeholder={"Inserisci il prezzo del prodotto"}
                    dispatch={dispatch}
                    action="SET_PRODUCT_PRICE"
                    required={true}
                />
                <InputNumber
                    id={"product-discount"}
                    label={"Percentuale di sconto"}
                    placeholder={"Inserisci lo sconto del prodotto"}
                    max={100}
                    dispatch={dispatch}
                    action="SET_PRODUCT_DISCOUNT_PERCENTAGE"
                />
                <InputNumber
                    id={"product-rating"}
                    label={"Valutazione del prodotto"}
                    placeholder={"Inserisci la valutazione del prodotto"}
                    max={5}
                    dispatch={dispatch}
                    action="SET_PRODUCT_RATING"
                />
                <InputNumber
                    id={"product-stock"}
                    label={"Quantità disponibile"}
                    placeholder={"Inserisci la quantità disponibile"}
                    dispatch={dispatch}
                    action="SET_PRODUCT_STOCK"
                />
                <InputString
                    id={"product-brand"}
                    label={"Marca del prodotto"}
                    placeholder={"Inserisci la marca del prodotto"}
                    max={30}
                    dispatch={dispatch}
                    action="SET_PRODUCT_BRAND"
                />
                <InputString
                    id={"product-category"}
                    label={"Categoria del prodotto"}
                    placeholder={"Inserisci la categoria del prodotto"}
                    max={30}
                    dispatch={dispatch}
                    action="SET_PRODUCT_CATEGORY"
                />
                <Button variant="primary" type="submit" disabled={(!state.valid && state.changed)}>
                    Aggiungi
                </Button>
            </Form>
        </Container>
    );
};

export default AddProduct;
