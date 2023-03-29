
import { API_BASE_URL } from "../../config.js";
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from "../../store/dummyjson/actions.js";

const fetchCategoryProducts = async (dispatch, category) => {
    dispatch(fetchDataRequest());
    try {
        const url = `${API_BASE_URL}products/category/${category}'`;
        const data = await fetch(url);
        const json = await data.json();
        dispatch(fetchDataSuccess(json));
    } catch(error) {
        dispatch(fetchDataFailure(error.message));
    }
}

export default fetchCategoryProducts;