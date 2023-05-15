import React, { useEffect, useState } from "react";
import { Cart } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import Search from "../Search/index.jsx";

const Header = ({ setSearchText, cart }) => {

    return<>
        <Row>
            <Col>
                <h1>E-Commerce</h1>
            </Col>
            <Col>
                {cart} <Cart />
            </Col>
        </Row>
        <Search handler={setSearchText} />
    </>;
};

export default Header;