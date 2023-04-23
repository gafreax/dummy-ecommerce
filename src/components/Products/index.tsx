import  React  from "react";
import { Col, Row } from "react-bootstrap";

import { UI_PRODUCTS_VIEW_COUNT } from "../../config";

import GhostCard from "./GhostCard/index.js";
import ProductCard from "./ProductCard/index.js";
//specify type of..
const Products = (productsStore: { products: { loading: any; items: any; skip: any; }; }) => {
    const { loading, items, skip } = productsStore.products;
    if(loading && !items) {
        <Col xs={12} md={9}>
            <Row> <GhostCard /> <GhostCard /> <GhostCard /> <GhostCard /> </Row>
        </Col>
    } else if(!loading && items) {
        return <Col xs={12} md={9}>
            <Row>
            { items?.slice(skip, skip + UI_PRODUCTS_VIEW_COUNT).map((product: { id: any; }) => 
                    <Col key={`c-${product.id}`} xs={12} md={6}>
                        <ProductCard  product={product} />
                    </Col> 
                )
            }
            </Row>
        </Col>
    }
};

export default Products;