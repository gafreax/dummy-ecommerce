import { Provider } from "react-redux";
import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import fetchProducts from "./api/fetchProduct";
import {store} from "./store/index.js";

import Card from "./components/Card";
import Button from "./components/Button";
import Search from "./components/Search";
import Modal from "./components/Modal";

import { API_FETCH_LIMIT } from "./config";
import Categories from "./components/Categories";

import "./App.css";

function App() {
  const [products, setProducts] = useState(undefined);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [modalState, setModalState] = useState({ show: false, images: null });
  const [cookies] = useCookies(["auth"]);

  useEffect(() => {
    const getProducts = async () => {
      setSkip(0);
      const { products, total } = await fetchProducts({ skip: 0, searchText });
      setTotal(total);
      setProducts(products);
    };
    getProducts();
  }, [searchText]);

  useEffect(() => {
    const getProducts = async () => {
      const { products, total } = await fetchProducts({ skip });
      setTotal(total);
      setProducts(products);
    };
    getProducts();
  }, [skip]);

  const onBackHandler = (e) => {
    if (skip - API_FETCH_LIMIT >= 0) {
      setSkip(skip - API_FETCH_LIMIT);
    }
  };

  const onForwardHandler = (e) => {
    if (skip + API_FETCH_LIMIT < total) {
      setSkip(skip + API_FETCH_LIMIT);
    }
  };

  const showProduct = () => {
    if (!products) return "Sto caricando...";
    return products.map((product) => {
      const modalState = { show: true, images: product.images };
      const key = `card-${product.id}`;
      return (
        <Card
          product={product}
          key={key}
          imageHandler={(e) => setModalState(modalState)}
        />
      );
    });
  };

  return (
    <Provider store={store}>
      {cookies.auth ? (
        <>
          <Modal modalState={modalState} setModalState={setModalState} />
          <Container>
            <Row>
              <Col>
                <h1>E-Commerce</h1>
                <h3>{searchText}</h3>
              </Col>
            </Row>
            <Search handler={setSearchText} />
            <Row>
              <Col xs={2}>
                <Categories />
              </Col>
              {showProduct()}
            </Row>
            <Row>
              <Col>
                <Button onClick={onBackHandler}>indietro</Button>
                <Button onClick={onForwardHandler}>avanti</Button>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <Navigate replace to="/login" />
      )}
    </Provider>
  );
}

export default App;
