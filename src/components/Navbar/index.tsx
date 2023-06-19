import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Form, Nav, Navbar, Offcanvas, Overlay, Popover } from 'react-bootstrap';
import { Cart, Cash } from "react-bootstrap-icons"
import { changeSkip } from "../../store/dummyjson/actions";

import fetchProducts from "../../api/dummyjson/fetchProducts";
import searchProducts from "../../api/dummyjson/searchProducts";
import ShowCartItems from "./ShowCartItems";





const NavbarMenu = () => {
  const state = useSelector((store: any) => store.cart);
  const searchRef = useRef("");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event: any) => {
    setShow(!show);
    setTarget(event.target);
  };
  const searchHandler = () => {
    (searchRef.current?.value ==='')
      ? clearSearch()
      : setSearchText(searchRef.current?.value);
  };


  const clearSearch = () => {
    setSearchText('');
    fetchProducts(dispatch, 0);
    dispatch(changeSkip(0));
  };

  useEffect(() => {
    if (searchText && searchText.length > 0) {
      searchProducts({ dispatch, searchText });
      dispatch(changeSkip(0));

    }
  }, [dispatch, searchText]);




  return (
    <>

      <Col>
        <Navbar expand="md" className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/"><h1>E-Commerce</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Offcanvas
              aria-labelledby="responsive-navbar-nav"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="responsive-navbar-nav">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Col>
      <Col>

        <div className="  position-relative text-end mb-2 me-2" ref={ref}>
          <Button onClick={handleClick}> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{(state.cartItems.length > 0) ? state.cartItems.length : ''}</span>{<Cart className="ms-1 me-1" ></Cart>}</Button>
          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref}
            containerPadding={2}
            rootCloseEvent='true'
          >
            <Popover id="popover-contained">
              <Popover.Header as="h2">
                <span className="badge bg-danger">{state.cartItems.length}</span>
                <Cart className="ms-1 me-3" />
                <span className="badge bg-success">{state.totalPrice}</span>
                <Cash className="ms-1 me-3" /></Popover.Header>
              <Popover.Body className="p-2 mw-100">
                <ShowCartItems></ShowCartItems>
              </Popover.Body>
              <Popover.Header as="h3"> <Button
                href="/checkout"
                variant={"info"}
                size="sm"
                style={{ marginLeft: "1px" }}
              >
                Checkout
              </Button></Popover.Header>
            </Popover>
          </Overlay>
        </div>
        <Form className="d-flex m-2">
          <Form.Control
            type="search"
            aria-describedby="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            ref={searchRef}
            onclose={()=>clearSearch()}
          />


          <Button
            onClick={() => searchHandler()}
            variant="outline-success">Search</Button>
        </Form>
      </Col>
    </>
  );
}

export default NavbarMenu