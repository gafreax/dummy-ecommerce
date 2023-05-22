import React from "react";
import { Cart, Cash } from "react-bootstrap-icons";
import { Badge, Button, Col, Row } from "react-bootstrap";
import Search from "../Search/index.jsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { HeaderProps } from "./index.types.js";

const Header = ( { link, linkTitle, linkType, setSearchText, showSearch } :  HeaderProps) => {
    const state = useSelector( (store:any) => store.cart)
    const currentPage = window.location.pathname.split("/").pop();
    
    return<>
        <Row>
            <Col>
                <h1>E-Commerce </h1>
            </Col>
            <Col style={{textAlign: "center", alignSelf: "center"}}>
                <h3>
                    <Badge bg="secondary">{currentPage?.length ? currentPage : "home"}</Badge>
                </h3>
            </Col>
            <Col xs={4} style={{textAlign: "right", alignSelf: "center"}}>
                {state.cartItems.length} <Cart style={{marginLeft: "8px"}} /> {state.totalPrice} <Cash style={{marginLeft: "8px"}}/>
                { link &&  <NavLink to={link}> 
                        <Button variant={linkType || "info"} size="sm" style={{marginLeft: "8px"}}>
                            {linkTitle}    
                        </Button>
                    </NavLink>
                }
            </Col>
        </Row>
        { showSearch && <Search handler={setSearchText} /> }
    </>;
};

export default Header;