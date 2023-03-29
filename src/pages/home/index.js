import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { changeSkip } from "../../store/dummyjson/actions";

import Search from "../../components/Search";
import Categories from "../../components/Categories";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import { API_FETCH_LIMIT } from "../../config";
import GhostCard from "../../components/GhostCard";
import searchProducts from "../../api/dummyjson/searchProducts";
import fetchProducts from "../../api/dummyjson/fetchProducts";

function Home() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");
    const products = useSelector((state) => state.products);

    useEffect(() => {
        console.log(searchText);
        if(searchText.trim().length === 0 ) {
            fetchProducts(dispatch, 0);
        } else {
            searchProducts(dispatch, searchText);
        }
    }, [dispatch, searchText])

    const handleSkipPrev = () => {
        const skip = products.skip - API_FETCH_LIMIT;
        if (skip >= 0) {
            dispatch(changeSkip(products.skip - API_FETCH_LIMIT));
        }
    };

    const handleSkipNext = () => {
        const skip = products.skip + API_FETCH_LIMIT;
        if (skip <= products.total) {
            dispatch(changeSkip(products.skip + API_FETCH_LIMIT));
        }
    };

    return (
    <Container>
        <Row>
            <Col>
                <h1>E-Commerce</h1>
            </Col>
        </Row>
        <Search handler={setSearchText} />
        <Row>
            <Col xs={12} md={3} style={{ padding: "1rem", marginBottom: "1rem" }}>
                <Categories />
            </Col>
            <Col xs={12} md={9}>
                <Row>
                {products && products.loading && <GhostCard />}
                {products &&
                products.products.map((product) => (
                    <Col key={`c-${product.id}`} xs={12} md={6}>
                        <ProductCard
                            product={product}
                            imageHandler={() => {}}
                        />
                    </Col>
                ))}
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button onClick={() => handleSkipPrev()}>indietro</Button>
                <Button onClick={() => handleSkipNext()}>avanti</Button>
            </Col>
        </Row>
    </Container>
    );
}

export default Home;
