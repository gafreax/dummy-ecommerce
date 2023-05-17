import React from "react";
import { Cart } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import Search from "../Search/index.jsx";
import useLocalStorage from "../../hooks/useLocalStorage.js";

const Header = ( {setSearchText} : { setSearchText: Function }) => {
    const [value,] = useLocalStorage("cart");
    
    console.log("cart value", value);

    return<>
        <Row>
            <Col>
                <h1>E-Commerce</h1>
            </Col>
            <Col>
                {value.length} <Cart />
            </Col>
        </Row>
        <Search handler={setSearchText} />
    </>;
};

export default Header;