import React from "react";

function Search({handler}) {

    return <nav className="navbar">
    <div className="container">
      <form className="d-flex" role="search">
        <input onChange={e => handler(e.target.value)} className="form-control me-3" type="search" placeholder="Search" />
      </form>
    </div>
  </nav>
}

export default Search