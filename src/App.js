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
  
  const loading = useSelector(state => state.loading);
  const dataIsPresent = useSelector(state => state.dataIsPresent);

  const dispatch = useDispatch();

  const [modalState, setModalState] = useState({ show: false, images: null });
  const [cookies] = useCookies(["auth"]);

  useEffect(() => {
    fetchProducts(dispatch);
  },[]);

  const onBackHandler = (e) => {
    // if (skip - API_FETCH_LIMIT >= 0) {
    //   setSkip(skip - API_FETCH_LIMIT);
    // }
  };

  const onForwardHandler = (e) => {
    // if (skip + API_FETCH_LIMIT < total) {
    //   setSkip(skip + API_FETCH_LIMIT);
    // }
  };

  return (
    <>
      <Modal modalState={modalState} setModalState={setModalState} />
      { cookies.auth ? (
        <>
          { loading || !dataIsPresent ? <h2>sto caricando</h2> 
          :
            <Home />
          }
        </>
      ) : (
        <Navigate replace to="/login" />
      )};
    </>
  )
}

export default App;
