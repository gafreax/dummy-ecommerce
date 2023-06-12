import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import "../style.scss"

import fetchCategoryProducts from "../../../api/dummyjson/fetchCategoryProducts.js";
import { Col } from 'react-bootstrap';

const showCategories = (categories, setSelectedCategory) => {
  return categories?.map(category => {
    return <span key={`cat-${category}`} onClick={() => setSelectedCategory(category)}>
      {category}
    </span>
  });
};

function CategoriesDesktop ({categories}) {
    
    const [selectedCategory, setSelectedCategory] = useState("");

    const dispatch = useDispatch();

    useMemo(() => {
      if(selectedCategory && selectedCategory.length > 0) {
        fetchCategoryProducts({dispatch, category: selectedCategory});
        
      }
    }, [dispatch, selectedCategory]);



    return <Col xs={12} md={3} >
      <div className="dummy-categories">{ showCategories(categories, setSelectedCategory) }</div>
    </Col>
    
}

export default CategoriesDesktop;
