import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Accordion,Badge } from "react-bootstrap";
import { showCategories } from "../index.js";

import "../style.scss"

import fetchCategoryProducts from "../../../api/dummyjson/fetchCategoryProducts.js";

function CategoriesMobile ({categories}) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const dispatch = useDispatch();

    useMemo(() => {
      if(selectedCategory && selectedCategory.length > 0) {
        fetchCategoryProducts({dispatch, category: selectedCategory});
      }
    }, [dispatch, selectedCategory]);


    return <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Categories</Accordion.Header>
      <Accordion.Body>
      { showCategories(categories,true) }
      </Accordion.Body>
      </Accordion.Item>
    </Accordion>
}

export default CategoriesMobile;
