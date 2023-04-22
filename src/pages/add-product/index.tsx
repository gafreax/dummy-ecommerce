import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap"

import "./style.scss";

import InputString from "../../components/Input/InputString/index.tsx";
import InputNumber from "../../components/Input/InputNumber/index.tsx";

// todo:
//   "title": "iPhone 9",  type string - 50 caratteri
//   "description": "An apple mobile which is nothing like apple", type string - 500 caratteri
//   "price": 549, // type number - > 0 
//   "discountPercentage": 12.96, // type number - > 0 <= 100
//   "rating": 4.69, // type number - > 0 <= 5
//   "stock": 94, // type number - > 0
//   "brand": "Apple", // type string - 50 caratteri
//   "category": "smartphones", // type string - 50 caratteri
//   "thumbnail": "...", // type string - 500 caratteri, end with .jpg, .jpeg, .wepb
//   "images": ["...", "...", "..."] // type string - 500 caratteri, end with .jpg, .jpeg, .wepb, .png, .gif


const post = (data) => {
    console.log("post");
    console.dir(data);
}

const AddProduct = () => {
    const refName= useRef<HTMLInputElement>(null);
    const refDescription = useRef<HTMLInputElement>(null);
    const refPrice = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!refName.current || typeof refName?.current.value !== "string" || refName.current.value.length === 0 ) {
            console.error("il nome deve essere una stringa e non essere vuoto");
            setError("il nome deve essere una stringa e non essere vuoto");
            return;
        }
        if(!refDescription.current || typeof refDescription?.current.value !== "string" || refDescription.current.value.length === 0) {
            console.error("la descrizione deve essere una stringa e non essere vuoto");
            setError("la descrizione deve essere una stringa e non essere vuoto");
            return;
        }
        post({
            productName: refName.current?.value, 
            productDescription: refDescription.current?.value
        });
    };

    return <Container className="AppProduct">
        <h1>Aggiungi un articolo</h1>
        <p>{error}</p>
        <Form onSubmit={handleSubmit}>
            <InputString 
                id={"product-name"} 
                label={"Nome del prodort"}
                placeholder={"Inserisci il nome del prodotto"}
                max={30}
            />
            <InputString 
                id={"product-descripton"} 
                label={"Descrizione del prodotto"}
                placeholder={"Inserisci la descrizione del prodotto"}
                max={500}
            />
            <InputNumber
                id={"product-price"}
                label={"Prezzo del prodotto"}
                placeholder={"Inserisci il prezzo del prodotto"}
                max={null}
            />
            <InputNumber
                id={"product-discount"}
                label={"Percentuale di sconto"}
                placeholder={"Inserisci lo sconto del prodotto"}
                max={100}
            />
            <Button variant="primary" type="submit">Aggiungi</Button>
        </Form>
    </Container>;
};

export default AddProduct;