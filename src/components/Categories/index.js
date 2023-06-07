import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Badge } from "react-bootstrap";


import "./style.scss"

import fetchCategories from "../../api/fetchCategories.js";
import fetchCategoryProducts from "../../api/dummyjson/fetchCategoryProducts.js";
import CategoriesDesktop from './CategoriesDesktop/index.js';
import CategoriesMobile from './CategoriesMobile/index.js';




const getIsMobile = () => window.innerWidth <= 768

export const showCategories = (categories, isMobile) => {
  return categories?.map(category => {

    if (isMobile) {
      return <Badge className="badge-categories m-1" key={`cat-${category}`} onClick={() => setSelectedCategory(category)}>
        {category}
      </Badge>
    } 
    return <span key={`cat-${category}`} onClick={() => setSelectedCategory(category)}>
      {category}
    </span>
  });
};
function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(getIsMobile());

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setIsMobile(getIsMobile());
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);


  useMemo(() => {
    if (selectedCategory && selectedCategory.length > 0) {
      fetchCategoryProducts({ dispatch, category: selectedCategory });
    }
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    const getCategories = async () => {
      const result = await fetchCategories();
      setCategories(result);
    };
    getCategories();
  }, []);

  return (isMobile) ? <CategoriesMobile categories={categories}  /> : <CategoriesDesktop categories={categories} />;

}

export default Categories;
