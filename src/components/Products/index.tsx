import  React  from "react";
import { Col, Row } from "react-bootstrap";

import { UI_PRODUCTS_VIEW_COUNT } from "../../config";

import GhostCard from "./GhostCard/index.js";
import ProductCard from "./ProductCard/index.tsx";
import { ProductItem, ProductState } from "../../store/dummyjson/reducers/productReducer.types.js";

const Products = ({ loading, items, skip }:  ProductState ) => {
    if(loading && !items) {
        return <Col xs={12} md={9}>
            <Row> <GhostCard /> <GhostCard /> <GhostCard /> <GhostCard /> </Row>
        </Col>
    } else if(!loading && items) {
        return <Col xs={12} md={9}>
            <Row xs={1} md={2} className="g-4">
            { items?.slice(skip, skip + UI_PRODUCTS_VIEW_COUNT).map(({ description, id, images, title, price}: ProductItem) => 
                    <Col key={`c-${id}`} xs={12} md={6}>
                        <ProductCard description={description} id={id} images={images} title={title} price={price} />
                    </Col> 
                )
            }
            </Row>
        </Col>
    }
};

export default Products;