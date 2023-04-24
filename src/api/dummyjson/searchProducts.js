
import { API_BASE_URL, API_FETCH_LIMIT } from "../../config.js";
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from "../../store/dummyjson/actions.js";

const searchProducts = async ({ dispatch, searchText }) => {
    dispatch(fetchDataRequest());
    try {
        const searchFilter = `/search?q=${searchText}&`;
        const url = `${API_BASE_URL}products${searchFilter}limit=${API_FETCH_LIMIT}`;
        const data = await fetch(url);
        const json = await data.json();
        dispatch(fetchDataSuccess(json));
    } catch(error) {
        dispatch(fetchDataFailure(error.message));
    }
}

export default searchProducts;