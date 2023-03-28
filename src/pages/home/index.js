import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { changeSkip } from "../../store/dummyjson/actions";

import Search from "../../components/Search";
import Categories from "../../components/Categories";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { API_FETCH_LIMIT } from "../../config";
import GhostCard from "../../components/GhostCard";

function Home() {
    const dispatch = useDispatch();
    const [, setSearchText] = useState("");
    const products = useSelector((state) => state.products);

    const handleSkipPrev = () => {
        const skip = products.skip-API_FETCH_LIMIT;
        if(skip >=0) {
            dispatch(changeSkip(products.skip-API_FETCH_LIMIT));
        }
    }

    const handleSkipNext = () => {
        const skip = products.skip+API_FETCH_LIMIT;
        if(skip <= products.total) {
            dispatch(changeSkip(products.skip+API_FETCH_LIMIT));
        }
    }

    return (
    <Container>
      <Row>
        <Col>
          <h1>E-Commerce</h1>
        </Col>
      </Row>
      <Search handler={setSearchText} />
      <Row>
        <Col xs={12} md={2} >
          <Categories />
        </Col>
        <Col xs={12} md={10} >
        { products.loading && <GhostCard />}
        {products &&
            products.products.map((product) => (
            <Card
                product={product}
                key={`c-${product.id}`}
                imageHandler={() => {}}
              />
            ))}
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
