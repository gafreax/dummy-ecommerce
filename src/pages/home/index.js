import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


import fetchProducts from "../../api/dummyjson/fetchProducts";

import Categories from "../../components/Categories/index.js";
import Header from '../../components/Header/index.tsx';
import Products from "../../components/Products/index.tsx";
import Navigator from '../../components/Navigator/index.tsx';

function Home() {
    const dispatch = useDispatch();
    const [cart, setCart] = useState([{}]);

    const products = useSelector((state) => state.products);

    // chiamato quando cambia loaded o skip
    const fetchProductsCallback = useCallback(() => {
        if(products.skip >= products.loaded || products.loaded === 0) {
            fetchProducts(dispatch, products.loaded);
        }
    }, [dispatch, products.loaded, products.skip]);
    

    // effect (memoizied) chiamato quando cambia searchText o una funzione dipendente
    useMemo(() => {
        console.log("memo called");
        fetchProductsCallback();
    }, [fetchProductsCallback]);

    // effect (memoizied) chiamato all'inizio della pagina
    useMemo(() => {
        console.log("memo init called");
        fetchProducts(dispatch, 0);
    }, [dispatch]);


    useEffect(() => {
        const cartJSON = localStorage.getItem("cart");
        const cart = cartJSON ? JSON.parse(cartJSON) : [];
        setCart(cart);
    }, []);

    return (
    <Container>
        <Header />
        <Row>
            <Categories />
            <Products products={products} setCart={setCart} cart={cart}/>
        </Row>
        <Navigator />
    </Container>
    );
}

export default Home;
