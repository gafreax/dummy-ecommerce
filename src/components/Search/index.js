import {useDispatch, useSelector} from 'react-redux';
import React, { useRef } from "react";
import Button from "../Button";
import { clear, increment } from '../../store';

function Search({handler}) {
    const searchRef = useRef("");
    const counter = useSelector( state => state.counter);
    const dispatch = useDispatch();
    const searchHandler = () => {
      dispatch(increment);
      handler(searchRef.current.value);
    }

    const clearSearch = () => {
      searchRef.current.value = "";
      dispatch(clear);
      handler("");
    }

    return <nav className="navbar">
    <div className="container">
      <form className="d-flex" role="search">
        <input onChange={e => e.target.value.trim().length === 0 && handler("") } ref={searchRef} className="form-control me-3" type="search" placeholder="Search" />
        <Button onClick={() => searchHandler() }>Ricerca</Button>
        <Button onClick={() => clearSearch() }>Cancella</Button>
      </form>
      <span>ricerche effettuate {counter}</span>
    </div>
  </nav>
}

export default Search