import React, { useEffect, useState } from "react";

import fetchCategories from "../../api/fetchCategories.js";

function Categories () {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
        const result = await fetchCategories();
        setCategories(result);
      };
      getCategories();
    }, []);

    return categories && categories.map(category => <span key={`cat-${category}`} className="badge bg-secondary">{category}</span>)
}

export default Categories;