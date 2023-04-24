import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { UI_PRODUCTS_VIEW_COUNT } from '../../config';

import "./style.scss";

import { changeSkip } from '../../store/dummyjson/actions';

const Navigator = () => {
    const products = useSelector((state:any) => state.products);
    const dispatch = useDispatch();
    
    const handleSkipPrev = () => {
        const skip = products.skip - UI_PRODUCTS_VIEW_COUNT;
        if (skip >= 0) {
            dispatch(changeSkip(skip));
        }
    };

    const handleSkipNext = () => {
        const skip = products.skip + UI_PRODUCTS_VIEW_COUNT;
        if (skip <= products.total) {
            dispatch(changeSkip(skip));
        }
    };

    return <Row>
        <Col className="d-flex justify-content-center">
            <Button className="m-3" onClick={() => handleSkipPrev()} variant={products.skip === 0 ? 'light': 'info'}>indietro</Button>
            <p className="product-slice">{products.skip} - {products.skip+UI_PRODUCTS_VIEW_COUNT}</p>
            <Button className="m-3" onClick={() => handleSkipNext()} variant={products.skip >= products.total ? 'light': 'info'}>avanti</Button>
        </Col>
    </Row>
};

export default Navigator;