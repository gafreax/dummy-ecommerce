
import { API_BASE_URL } from "../../config.js";
import { changeSkip, fetchDataFailure, fetchDataRequest, fetchDataSuccess } from "../../store/dummyjson/actions.js";

const fetchCategoryProducts = async ( category, dispatch) => {
    dispatch(fetchDataRequest());
    try {
        const url = `${API_BASE_URL}products/category/${category}`;
        const data = await fetch(url);
        const json = await data.json();
        dispatch(fetchDataSuccess(json));
        dispatch(changeSkip(0)); //always put in default state skip once category requested...
    } catch(error) {
        dispatch(fetchDataFailure(error.message));
    }
}

export default fetchCategoryProducts;