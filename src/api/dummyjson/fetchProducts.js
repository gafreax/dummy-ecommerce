
import { API_BASE_URL, API_FETCH_LIMIT } from "../../config.js";
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from "../../store/dummyjson/actions.js";

const fetchProducts = async (dispatch, skip) => {
    dispatch(fetchDataRequest());
    try {
        const data = await fetch(`${API_BASE_URL}products?limit=${API_FETCH_LIMIT}&skip=${0}`);
        const json = await data.json();
        dispatch(fetchDataSuccess(json));
    } catch(error) {
        dispatch(fetchDataFailure(error.message));
    }
}

export default fetchProducts;