import React, { useCallback, useEffect, useMemo } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


import fetchProducts from "../../api/dummyjson/fetchProducts";

import Categories from "../../components/Categories/index.js";
import Header from '../../components/Header/index.tsx';
import Products from "../../components/Products/index.tsx";
import Navigator from '../../components/Navigator/index.tsx';
import { setCart } from "../../store/dummyjson/actions.js";

function Home() {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products);

    // chiamato quando cambia loaded o skip
    const fetchProductsCallback = useCallback(() => {
        if(products.skip >= products.loaded || products.loaded === 0) {
            fetchProducts(dispatch, products.loaded);
        }
    }, [dispatch, products.loaded, products.skip]);
    

    // effect (memoizied) chiamato quando cambia searchText o una funzione dipendente
    useMemo(() => {
        fetchProductsCallback();
    }, [fetchProductsCallback]);

    // effect (memoizied) chiamato all'inizio della pagina
    useMemo(() => {
        fetchProducts(dispatch, 0);
    }, [dispatch]);


    useEffect(() => {
        const cartJSON = localStorage.getItem("cart");
        const cart = cartJSON ? JSON.parse(cartJSON) : [];
        if(cart?.length > 0 ) {
            dispatch(setCart(cart));
        }
    }, [dispatch]);

    return (
    <Container>
        <Header link={"/checkout"} linkTitle={"Checkout"} showSearch={true} />
        <Row>
            <Categories />
            <Products  loading={products.loading} items={products.items} skip={products.skip} />
        </Row>
        <Navigator />
    </Container>
    );
}

export default Home;
