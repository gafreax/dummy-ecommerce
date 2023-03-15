import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import Search from "../../components/Search";
import Categories from "../../components/Categories";
import Button from "../../components/Button";
import Card from "../../components/Card";

function Home() {
    const [, setSearchText] = useState("");
    const products = useSelector((state) => state.products);

    return (
    <Container>
        <Row>
            <Col><h1>E-Commerce</h1></Col>
        </Row>
        <Search handler={setSearchText} />
        <Row>
            <Col xs={2}>
                <Categories />
            </Col>
            {products && products.map((product) => 
                <Card product={product} key={`c-${product.id}`} imageHandler={() => {}} />
            )}
        </Row>
        <Row>
            <Col>
                <Button onClick={() => {}}>indietro</Button>
                <Button onClick={() => {}}>avanti</Button>
            </Col>
        </Row>
    </Container>);
}

export default Home;
