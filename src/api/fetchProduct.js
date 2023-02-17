import { API_BASE_URL, API_FETCH_LIMIT } from "../config.js";

const fetchProducts = async ({skip, searchText=null}) => {
    const searchFilter = searchText ? `/search?q=${searchText}&`:'/?';
    console.log("fetchProducts: searchFilter", searchFilter);
    const url = `${API_BASE_URL}products${searchFilter}limit=${API_FETCH_LIMIT}&skip=${skip}`;
    console.log("fetchProducts: url", url)
    const dataFetched = await fetch(url);
    const dataJSON = await dataFetched.json();
    return dataJSON;
};

export default fetchProducts;
