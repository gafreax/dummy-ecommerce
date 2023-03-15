
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from "../../store/dummyjson/actions.js";

const fetchProducts = async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
        const data = await fetch('https://dummyjson.com/products');
        const json = await data.json();
        dispatch(fetchDataSuccess(json.products));
    } catch(error) {
        dispatch(fetchDataFailure(error.message));
    }
}

export default fetchProducts;