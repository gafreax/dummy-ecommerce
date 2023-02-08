import React, { useRef } from "react";
import Button from "../Button";

function Search({handler}) {
    const searchRef = useRef("");

    return <nav className="navbar">
    <div className="container">
      <form className="d-flex" role="search">
        <input onChange={e => e.target.value.trim().length === 0 && handler("") } ref={searchRef} className="form-control me-3" type="search" placeholder="Search" />
        <Button onClick={() => handler(searchRef.current.value) }>Ricerca</Button>
        <Button onClick={() => handler("") }>Cancella</Button>
      </form>
    </div>
  </nav>
}

export default Search