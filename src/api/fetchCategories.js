import { API_BASE_URL } from "../config.js";

const fetchCategories = async () => {
    const url = `${API_BASE_URL}product/categories`;
    const dataFetched = await fetch(url);
    const dataJSON = await dataFetched.json();
    return dataJSON;
};

export default fetchCategories;
