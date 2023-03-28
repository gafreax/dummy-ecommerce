
import { API_FETCH_LIMIT } from "../../config.js";
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from "../../store/dummyjson/actions.js";

const fetchProducts = async (dispatch,skip) => {
    dispatch(fetchDataRequest());
    try {
        const data = await fetch(`https://dummyjson.com/products?limit=${API_FETCH_LIMIT}&skip=${skip}`);
        const json = await data.json();
        dispatch(fetchDataSuccess(json));
    } catch(error) {
        dispatch(fetchDataFailure(error.message));
    }
}

export default fetchProducts;