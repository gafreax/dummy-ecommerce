import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { UI_PRODUCTS_VIEW_COUNT } from '../../config';

import { changeSkip } from '../../store/dummyjson/actions';

const Navigator = () => {
    const products = useSelector((state:any) => state.products);
    const dispatch = useDispatch();
    
    const handleSkipPrev = () => {
        const skip = products.skip - UI_PRODUCTS_VIEW_COUNT;
        if (skip >= 0) {
            dispatch(changeSkip(products.skip - UI_PRODUCTS_VIEW_COUNT));
        }
    };

    const handleSkipNext = () => {
        const skip = products.skip + UI_PRODUCTS_VIEW_COUNT;
        if (skip <= products.total) {
            dispatch(changeSkip(products.skip + UI_PRODUCTS_VIEW_COUNT));
        }
    };

    return <Row>
        <Col className="d-flex justify-content-center">
            <Button className="m-3" onClick={() => handleSkipPrev()}>indietro</Button>
            <Button className="m-3" onClick={() => handleSkipNext()}>avanti</Button>
        </Col>
    </Row>
};

export default Navigator;