import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { showCategories } from "../index.js";

import "../style.scss"

import fetchCategoryProducts from "../../../api/dummyjson/fetchCategoryProducts.js";
import { Col } from 'react-bootstrap';

function CategoriesDesktop ({categories}) {
    
    const [selectedCategory, setSelectedCategory] = useState("");

    const dispatch = useDispatch();

    useMemo(() => {
      if(selectedCategory && selectedCategory.length > 0) {
        fetchCategoryProducts({dispatch, category: selectedCategory});
        
      }
    }, [dispatch, selectedCategory]);



    return <Col xs={12} md={3} >
      <div className="dummy-categories">{ showCategories(categories,false) }</div>
    </Col>
    
}

export default CategoriesDesktop;
