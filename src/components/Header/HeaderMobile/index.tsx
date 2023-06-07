import React from "react";
import { Cart, House } from "react-bootstrap-icons";
import { Button, Col, Row } from "react-bootstrap";

import { NavLink } from "react-router-dom";

import { HeaderProps } from "./../index.types.js";

import Search from "../../Search/index.jsx";

const Header = ({
    link,
    linkTitle,
    linkType,
    setSearchText,
    showSearch,
}: HeaderProps) => {
    return (
        <>
            <Row className="p-2">
                <Col xs={8} md={3}>
                    <h1>E-Commerce </h1>
                </Col>
                <Col xs={4} style={{ textAlign: "right", alignSelf: "center" }}>
                    {link && (
                        <NavLink to={link}>
                            <Button variant={linkType || "info"} size="sm" >
                                {linkTitle === 'Home'? <House /> : <Cart />}
                            </Button>
                        </NavLink>
                    )}
                </Col>
            </Row>
            {showSearch && <Search handler={setSearchText} />}
        </>
    );
};

export default Header;
