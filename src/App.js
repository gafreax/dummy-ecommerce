import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";

import { API_BASE_URL } from "./config";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Modal from "./components/modal";

const image = "https://qui-montagna.com/wp-content/uploads/2022/01/k2.jpg";

function App() {
  const [products, setProducts] = useState(undefined);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [modal, setModal] = useState({show: false, src: image})
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
    if (!products) return "Caricamento...";
    return products
      .filter((product) => mustShow(product))
      .map((product, key) => <Card product={product} key={`card-${key}`} />);
  };

  return (
    <div className="App container">
      <h1>E-Commerce</h1>
      <button onClick={e => modal.show ? setModal({show:false, src: image}) : setModal({show:true, src: image})  }>vedi modale</button>
      <Search handler={searchHandler} />
      <div className="row">{showProduct()}</div>
      <div className="container">
        <Button onClick={onBackHandler}>indietro</Button>
        <Button onClick={onForwardHandler}>Avanti</Button>
      </div>
      
      <Modal show={modal.show} src={modal.src} />
    </div>
  );
}

export default App;
