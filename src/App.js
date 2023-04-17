import React from "react";
//import { useDispatch, useSelector } from "react-redux";
// import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import fetchProducts from "./api/dummyjson/fetchProducts.js";

import Home from "./pages/home/index.js";
import Modal from "./components/Modal/index.js";

function App() {
  const [cookies] = useCookies(["auth"]);

  if( cookies.auth ) {
    return <> <Modal /> <Home /> </>;
  }
  
  return <Navigate replace to="/login" />
}

export default App;
