import React, { useEffect, useState } from "react";


import "./style.scss"

import fetchCategories from "../../api/fetchCategories.js";
import CategoriesDesktop from './CategoriesDesktop/index.js';
import CategoriesMobile from './CategoriesMobile/index.js';




const getIsMobile = () => window.innerWidth <= 768


function Categories() {
  const [categories, setCategories] = useState([]);

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
