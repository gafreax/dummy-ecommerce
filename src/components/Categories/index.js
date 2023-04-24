import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import "./style.scss"

import fetchCategories from "../../api/fetchCategories.js";
import fetchCategoryProducts from "../../api/dummyjson/fetchCategoryProducts.js";
import { Col } from 'react-bootstrap';

function Categories () {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const dispatch = useDispatch();

    useMemo(() => {
      if(selectedCategory && selectedCategory.length > 0) {
        fetchCategoryProducts({dispatch, category: selectedCategory});
      }
    }, [dispatch, selectedCategory]);

    useEffect(() => {
      const getCategories = async () => {
        const result = await fetchCategories();
        setCategories(result);
      };
      getCategories();
    }, []);

    const showCategories = categories => {
      return categories && categories.map( category => {
        return <span key={`cat-${category}`} onClick={() => setSelectedCategory(category)}>
          {category}
        </span>
      });
    };

    return <Col xs={12} md={3} >
      <div className="dummy-categories">{ showCategories(categories) }</div>
    </Col>
    
}

export default Categories;
