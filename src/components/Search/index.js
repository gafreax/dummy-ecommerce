import React, { useRef } from "react";
import Button from "../Button";

function Search({handler}) {
    const searchRef = useRef("");
    
    const searchHandler = () => {
      handler(searchRef.current.value);
    }

    const clearSearch = () => {
      searchRef.current.value = "";
      handler("");
    }

    return <nav className="navbar">
    <div className="container">
      <form className="d-flex" role="search">
        <input onChange={e => e.target.value.trim().length === 0 && handler("") } ref={searchRef} className="form-control me-3" type="search" placeholder="Search" />
        <Button onClick={() => searchHandler() }>Ricerca</Button>
        <Button onClick={() => clearSearch() }>Cancella</Button>
      </form>
    </div>
  </nav>
}

export default Search