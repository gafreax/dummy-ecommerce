import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Accordion, Badge } from "react-bootstrap";

import "../style.scss"

import fetchCategoryProducts from "../../../api/dummyjson/fetchCategoryProducts.js";


const showCategories = (categories, setSelectedCategory) => {
  return categories?.map(category => {
    return <Badge className="badge-categories m-1 p-3" key={`cat-${category}`} onClick={() => setSelectedCategory(category)}>
      {category}
    </Badge>
  });
};

function CategoriesMobile({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const dispatch = useDispatch();

  useMemo(() => {
    if (selectedCategory && selectedCategory.length > 0) {
      fetchCategoryProducts({ dispatch, category: selectedCategory });
    }
  }, [dispatch, selectedCategory]);


  return <Accordion >
    <Accordion.Item eventKey="0">
      <Accordion.Header>Categories</Accordion.Header>
      <Accordion.Body>
        {showCategories(categories, setSelectedCategory)}
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
}

export default CategoriesMobile;
