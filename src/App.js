import React, { createContext, useEffect, useState } from "react";

import Card from "./components/Card";
import Button from "./components/Button";
import Search from "./components/Search";
import Modal from "./components/Modal";

import "./App.css";

import { API_BASE_URL } from "./config";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Modal from "./components/Modal";

function App() {
  const [products, setProducts] = useState(undefined);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [modalState, setModalState] = useState({show: false, src: null })

  const limit = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `${API_BASE_URL}products?limit=${limit}&skip=${skip}`;
      const dataFetched = await fetch(url);
      const dataJSON = await dataFetched.json();
      setTotal(dataJSON.total);
      setProducts(dataJSON.products);
    };
    fetchProducts();
  }, [skip]);

  const searchHandler = (text) => {
    console.log("handler on ", text);
    setSearchText(text.toLowerCase());
  };

  const onBackHandler = (e) => {
    if (skip - limit >= 0) {
      setSkip(skip - limit);
    }
  };

  const onForwardHandler = (e) => {
    if (skip + limit < total) {
      setSkip(skip + limit);
    }
  };

  // Todo: spiegare in classe
  const mustShow = (product) => {
    const brand = product.brand.toLowerCase();
    const ret = searchText === "" || brand.indexOf(searchText)>=0;
    console.log(`on ${brand} can return ${ret}`);
    return ret;
  };

  // Todo: spiegare in classe
  const showProduct = () => {
    if (!products) return "Sto caricando...";
    return products
      .filter((product) => mustShow(product))
      .map((product, key) => <Card product={product} key={`card-${key}`}
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
