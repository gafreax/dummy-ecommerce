import React, { useRef } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";


function Search({ handler }) {
  const searchRef = useRef("");

  const searchHandler = () => {
    handler(searchRef.current.value);
  };

  const clearSearch = () => {
    searchRef.current.value = "";
    handler("");
  };

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
