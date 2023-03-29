import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchCategoryProducts from "../../api/dummyjson/fetchCategoryProducts.js";

import fetchCategories from "../../api/fetchCategories.js";

import "./style.scss"

function handleClick({category, dispatch}) {
  console.log("cate", category);
  console.log(dispatch);
  dispatch(fetchCategoryProducts(category));
}

function showCategories({categories, dispatch}) {
  return categories && categories.map(category => {
    return <span key={`cat-${category}`} onClick={() => handleClick({category, dispatch})}>{category}</span>
  })
}


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

    return <div className="dummy-categories">{showCategories({categories, dispatch})}</div>
}

export default Categories;