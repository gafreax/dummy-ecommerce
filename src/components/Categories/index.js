import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./style.scss"

import fetchCategories from "../../api/fetchCategories.js";
import fetchCategoryProducts from "../../api/dummyjson/fetchCategoryProducts.js";
import { Col } from 'react-bootstrap';

function Categories () {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
      const getCategories = async () => {
        const result = await fetchCategories();
        setCategories(result);
      };
      getCategories();
    }, []);

    const handleClick = (category) => {
      fetchCategoryProducts(category, dispatch);
    };

    const showCategories = categories => {
      return categories && categories.map( category => {
        return <span key={`cat-${category}`} onClick={() => handleClick(category)}>
          {category}
        </span>
      });
    };

    return <Col xs={12} md={3} className="dummy-categories-col">
      <div className="dummy-categories">{ showCategories(categories) }</div>
    </Col>
    
}

export default Categories;
