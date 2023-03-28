import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";

import fetchProducts from "./api/dummyjson/fetchProducts";


import Home from "./pages/home";

import Modal from "./components/Modal";


import "./App.css";

function App() {
  
  const products = useSelector(state => state.products);

  const dispatch = useDispatch();

  const [modalState, setModalState] = useState({ show: false, images: null });
  const [cookies] = useCookies(["auth"]);

  useEffect(() => {
    fetchProducts(dispatch, products.skip);
  },[dispatch, products.skip]);

  return (
    <>
      <Modal modalState={modalState} setModalState={setModalState} />
      { cookies.auth ? (
        <Home />
      ) : (
        <Navigate replace to="/login" />
      )}
    </>
  )
}

export default App;
