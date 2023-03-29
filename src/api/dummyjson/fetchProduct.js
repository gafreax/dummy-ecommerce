
import { API_BASE_URL, API_FETCH_LIMIT } from "../../config.js";
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from "../../store/dummyjson/actions.js";

const fetchProducts = async (dispatch, id) => {
    dispatch(fetchDataRequest());
    try {
        const url = `${API_BASE_URL}products/${id}/?limit=3`;
        const data = await fetch(url);
        const json = await data.json();
        dispatch(fetchDataSuccess(json));
    } catch(error) {
        dispatch(fetchDataFailure(error.message));
    }
}

export default fetchProducts;