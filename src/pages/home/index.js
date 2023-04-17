import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import searchProducts from "../../api/dummyjson/searchProducts";
import fetchProducts from "../../api/dummyjson/fetchProducts";

import Categories from "../../components/Categories/index.js";
import Header from '../../components/Header/index.tsx';
import Products from "../../components/Products/index.tsx";
import Navigator from '../../components/Navigator/index.tsx';

function Home() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");
    const products = useSelector((state) => state.products);

    useEffect(() => {
        if(searchText.trim().length === 0 ) {
            fetchProducts(dispatch, products.loaded);
        } else {
            searchProducts(dispatch, searchText);
        }
    }, [dispatch, searchText, products.loaded])

    return (
    <Container>
        <Header setSearchText={setSearchText} />
        <Row>
            <Categories />
            <Products products={products} />
        </Row>
        <Navigator />
    </Container>
    );
}

export default Home;
