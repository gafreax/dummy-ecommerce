import React from "react";
import { Cart, Cash, Display } from "react-bootstrap-icons";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
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
    const state = useSelector((store: any) => store.cart);
    const currentPage = window.location.pathname.split("/").pop();

    return (
        <>
            <Row className="p-1">
                <Col >
                    <div> <h1>E-Commerce </h1></div>
                </Col>
                <Col className=" text-end" >
                    <span className="  badge  bg-danger">{state.cartItems.length}{" "}</span>
                    <Cart className="ms-1  me-3" />{" "}
                    <span className=" badge bg-success " >{state.totalPrice}{" "}</span>
                    <Cash className="ms-1  me-3" />
                    {link && (
                        <NavLink to={link}>
                            <Button variant={linkType || "info"} style={{ marginLeft: "8px" }}>
                                {linkTitle}
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
