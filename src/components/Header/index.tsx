import React from "react";
import { Col, Row } from "react-bootstrap";
import Search from "../Search/index.js";

const Header = ({setSearchText}) => {
    return<>
        <Row>
            <Col>
                <h1>E-Commerce</h1>
            </Col>
        </Row>
        <Search handler={setSearchText} />
    </>;
};

export default Header;