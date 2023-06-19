import React from "react";
import { Breadcrumb, Col, Row } from "react-bootstrap";

import NavbarMenu from "../../Navbar/index";

const HeaderBreadcrumbs = () => {
    const currentPage = window.location.pathname.split("/").pop();
    const nestedPage = currentPage?.length && currentPage
    return (
        <Breadcrumb className="ms-3">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            {currentPage?.length ? <Breadcrumb.Item active> {nestedPage} </Breadcrumb.Item> : <></>}
        </Breadcrumb>
    );
}


const HeaderType = () => {

    return (
        <>  
        <HeaderBreadcrumbs />
            <Row >
                <Col>
                    <NavbarMenu></NavbarMenu>
                </Col>
            </Row>
          
        </>
    );
};

export default HeaderType;
