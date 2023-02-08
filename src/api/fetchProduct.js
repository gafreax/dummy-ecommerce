import { API_BASE_URL, API_FETCH_LIMIT } from "../config.js";

const fetchProducts = async ({skip, searchText}) => {
    const searchFilter = searchText ? `/search?q=${searchText}`:'';
    const url = `${API_BASE_URL}products${searchFilter}?limit=${API_FETCH_LIMIT}&skip=${skip}`;
    const dataFetched = await fetch(url);
    const dataJSON = await dataFetched.json();
    return dataJSON;
};

export default fetchProducts;
