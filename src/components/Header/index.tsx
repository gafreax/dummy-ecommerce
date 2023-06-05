import React, { useEffect, useState } from "react";
import { Cart, Cash } from "react-bootstrap-icons";
import { Badge, Button, Col, Row } from "react-bootstrap";
import Search from "../Search/index.jsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { HeaderProps } from "./index.types.js";

const Header = ({ link, linkTitle, linkType, setSearchText, showSearch }: HeaderProps) => {
    const state = useSelector((store: any) => store.cart)
    const currentPage = window.location.pathname.split("/").pop();
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
        console.log(width);
        const currentWidthISMobile = window.innerWidth <= 768;
        setIsMobile(currentWidthISMobile);
        console.log("siamo mobile   ", currentWidthISMobile);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [width]);

    return <>
        <Row className="p-2">
            <Col xs={8} md={3}>
                <h1>E-Commerce </h1>
            </Col>
            {
                !isMobile && <Col xs={4} md={5} style={{ textAlign: "center", alignSelf: "center" }}>
                    <h3>
                        <Badge bg="secondary">{currentPage?.length ? currentPage : "home"}</Badge>
                    </h3>
                </Col>
            }
            {
                isMobile && <Col xs={4} style={{ textAlign: "right", alignSelf: "center" }}>
                    {link && <NavLink to={link}>
                        <Button variant={linkType || "info"} size="sm" style={{ marginLeft: "8px", paddingLeft:"4px" ,paddingRight:"4px"}}>
                            <Cart style={{ marginLeft: "4px" }} />
                        </Button>
                    </NavLink>}
                </Col>
            }
            {
                !isMobile &&
                <Col xs={12} md={4} style={{ textAlign: "right", alignSelf: "center" }}>
                    {state.cartItems.length} <Cart style={{ marginLeft: "8px" }} /> {state.totalPrice} <Cash style={{ marginLeft: "8px" }} />
                    {link && <NavLink to={link}>
                        <Button variant={linkType || "info"} size="sm" style={{ marginLeft: "8px" }}>
                            {linkTitle}
                        </Button>
                    </NavLink>
                    }
                </Col>
            }
        </Row>
        {showSearch && <Search handler={setSearchText} />}
    </>;
};

export default Header;