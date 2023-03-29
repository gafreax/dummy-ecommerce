import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import fetchProduct from "../../api/dummyjson/fetchProduct";

import ProductCard from "../../components/ProductCard";

function Product() {
    const dispatch = useDispatch();
    const {productId} = useParams();
    const products = useSelector(store => store.products);
    const product = products.products[0];

    useEffect(() => {
        fetchProduct(dispatch, productId);
    }, [dispatch, productId]);
    return <ProductCard product={product} imageHandler={() => console.log("not implemented")} />
}

export default Product;
