import React from "react";
import { Cart, Cash} from "react-bootstrap-icons";
import { Breadcrumb, Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { HeaderProps } from "./../index.types.js";

import Search from "../../Search/index.jsx";

const HeaderBreadcrumbs = () => {
    const currentPage = window.location.pathname.split("/").pop();
    const nestedPage = currentPage?.length && currentPage 
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            { currentPage?.length ? <Breadcrumb.Item active> {nestedPage} </Breadcrumb.Item> : <></> }
        </Breadcrumb>
    );
}


const Header = ({
    link,
    linkTitle,
    linkType,
    setSearchText,
    showSearch,
}: HeaderProps) => {
    const state = useSelector((store: any) => store.cart);

    return (
        <>
            <Row className="p-2">
                <Col>
                    <h1>E-Commerce</h1>
                    <HeaderBreadcrumbs />
                </Col>
                <Col className="text-end">
                    <span className="badge bg-danger">{state.cartItems.length}</span>
                    <Cart className="ms-1 me-3" />
                    <span className="badge bg-success">{state.totalPrice}</span>
                    <Cash className="ms-1 me-3" />
                    {link && (
                        <NavLink to={link}>
                            <Button
                                variant={linkType || "info"}
                                size="sm"
                                style={{ marginLeft: "8px" }}
                            >
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
