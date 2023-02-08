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
  const [reload, setReload] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [modalState, setModalState] = useState({show: false, src: null })

  useEffect(() => async () => {
    if(!reload) return;
    console.log("visualizza");
    const dataJSON = await fetchProducts({skip});
    setTotal(dataJSON.total);
    setProducts(dataJSON.products);
    setReload(false);
  }, [reload, skip]);

  useEffect(() => async () => {
    console.log("ricerca");
    const dataJSON = await fetchProducts({skip, searchText});
    setTotal(dataJSON.total);
    setProducts(dataJSON.products);
    fetchProducts();
  }, [searchText,skip]);

  const searchHandler = (text) => {
    if(text.trim().length === 0 ) {
      console.log("impostiamo skip ", skip);
      setReload(true);
      setSkip(0);
    } else {
      setSearchText(text.toLowerCase());
    }
  };

  const onBackHandler = (e) => {
    if (skip - API_FETCH_LIMIT >= 0) {
      setSkip(skip - API_FETCH_LIMIT);
      setReload(true);
    }
  };

  const onForwardHandler = (e) => {
    if (skip + API_FETCH_LIMIT < total) {
      setSkip(skip + API_FETCH_LIMIT);
      setReload(true);
    }
  };

  // Todo: spiegare in classe
  const showProduct = () => {
    if (!products) return "Sto caricando...";
    return products.map((product, key) => <Card product={product} key={`card-${key}`}
          imageHandler={e => setModalState({show: true, src: product.images[0] })}
        />);
  };

  return (
    <div className="App container">
      <h1>E-Commerce</h1>
        <Search handler={searchHandler} />
          <Modal modalState={modalState} onClick={e => setModalState({show: false, src:"" }) }/>
          
          {modalState.show || <div className="row"> {showProduct()} </div> }

        <div className="container">
          <Button onClick={onBackHandler}>indietro</Button>
          <Button onClick={onForwardHandler}>Avanti</Button>
        </div>
        
    </div>
  );
}

export default App;
