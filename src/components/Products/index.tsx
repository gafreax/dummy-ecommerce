import  React  from "react";
import { Col, Row } from "react-bootstrap";

import { UI_PRODUCTS_VIEW_COUNT } from "../../config";

import GhostCard from "./GhostCard/index.js";
import ProductCard from "./ProductCard/index.js";

type ProductInterface = {
    cart: any,
    products: any,
    setCart: Function
}

const Products = ({cart, products, setCart }: ProductInterface) => {
    const { loading, items, skip } = products;
    if(loading && !items) {
        return <Col xs={12} md={9}>
            <Row> <GhostCard /> <GhostCard /> <GhostCard /> <GhostCard /> </Row>
        </Col>
    } else if(!loading && items) {
        return <Col xs={12} md={9}>
            <Row xs={1} md={2} className="g-4">
            { items?.slice(skip, skip + UI_PRODUCTS_VIEW_COUNT).map((product: any) => 
                    <Col key={`c-${product.id}`} xs={12} md={6}>
                        <ProductCard product={product} />
                    </Col> 
                )
            }
            </Row>
        </Col>
    }
};

export default Products;