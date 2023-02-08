import React, { useEffect, useState } from "react";

import Card from "./components/Card";
import Button from "./components/Button";
import Search from "./components/Search";
import Modal from "./components/Modal";

import "./App.css";

import { API_BASE_URL } from "./config";

function App() {
  const [products, setProducts] = useState(undefined);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [reload, setReload] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [modalState, setModalState] = useState({show: false, src: null })

  const limit = 4;

  useEffect(() => {
    if(!reload) return;
    console.log("visualizza");
    const fetchProducts = async () => {
      const url = `${API_BASE_URL}products?limit=${limit}&skip=${skip}`;
      const dataFetched = await fetch(url);
      const dataJSON = await dataFetched.json();
      setTotal(dataJSON.total);
      setProducts(dataJSON.products);
    };
    fetchProducts();
    setReload(false);
  }, [reload, skip]);

  useEffect(() => {
    console.log("ricerca");
    const fetchProducts = async () => {
      if(searchText.trim().length === 0 || reload) return;
      const url = `${API_BASE_URL}products/search?q=${searchText}&limit=${limit}&skip=${skip}`;
      const dataFetched = await fetch(url);
      const dataJSON = await dataFetched.json();
      setTotal(dataJSON.total);
      setProducts(dataJSON.products);
    };
    fetchProducts();
  }, [searchText,limit,skip,reload]);

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
    if (skip - limit >= 0) {
      setSkip(skip - limit);
      setReload(true);
    }
  };

  const onForwardHandler = (e) => {
    if (skip + limit < total) {
      setSkip(skip + limit);
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
