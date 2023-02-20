import React, { useEffect, useState } from "react";

import fetchProducts from "./api/fetchProduct";

import Card from "./components/Card";
import Button from "./components/Button";
import Search from "./components/Search";
import Modal from "./components/Modal";

import "./App.css";

import { API_FETCH_LIMIT } from "./config";

function App() {
  const [products, setProducts] = useState(undefined);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [modalState, setModalState] = useState({ show: false, src: null });

  useEffect(() => {
    const getProducts = async () => {
      setSkip(0);
      const {products, total} = await fetchProducts({skip: 0, searchText});
      setTotal(total);
      setProducts(products);
    };
    getProducts();
  }, [searchText, skip]);

  useEffect(() => {
    const getProducts = async () => {
      const {products, total} = await fetchProducts({skip});
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
      const modalState = { show: true, src: product.images };
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
    <div className="App container">
      <h1>E-Commerce {searchText}</h1>
      <Search handler={setSearchText} />
      <Modal
        modalState={modalState}  setModalState={setModalState}
      />

      {modalState.show || (
        <div className="container">
          <div className="row"> {showProduct()} </div>
          <div className="d-flex">
            {skip - API_FETCH_LIMIT >= 0 && (
              <Button onClick={onBackHandler}>indietro</Button>
            )}
            {skip + API_FETCH_LIMIT < total && (
              <Button onClick={onForwardHandler}>avanti</Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
