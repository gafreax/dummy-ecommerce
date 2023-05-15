import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, Form, Button } from "react-bootstrap";

import { changeSkip } from "../../store/dummyjson/actions";

import fetchProducts from "../../api/dummyjson/fetchProducts";
import searchProducts from "../../api/dummyjson/searchProducts";

function Search({ handler }) {
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef("");
  const dispatch = useDispatch();

  const searchHandler = () => {
    setSearchText(searchRef.current.value);
  };

  const clearSearch = () => {
    searchRef.current.value = "";
    setSearchText("");
    fetchProducts(dispatch, 0);
    dispatch(changeSkip(0));
  };

  useEffect(() => {
    if (searchText && searchText.length > 0) {
      searchProducts({ dispatch, searchText });
      dispatch(changeSkip(0));
    }
  }, [dispatch, searchText]);

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search"
        type="text"
        onChange={(e) => e.target.value.trim().length === 0 && handler("")}
        ref={searchRef}
      />
      <Button onClick={() => searchHandler()}>Ricerca</Button>
      <Button variant="secondary" onClick={() => clearSearch()}>Cancella</Button>
    </InputGroup>
  );
}

export default Search;
