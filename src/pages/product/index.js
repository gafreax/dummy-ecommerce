import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import { fetchProduct } from "../../api/fetchProduct";
import Card from "../../components/Card";

function Product() {
    const [product, setProduct] = useState({});
    const {productId} = useParams();
    useEffect(() => {
        const getProduct = async () => {
            const product  = await fetchProduct({ id: productId });
            console.log(product);
            setProduct(product);
        };
        getProduct();
    }, [productId]);
    return <Card product={product} imageHandler={() => console.log("not implemented")} />
}

export default Product;
