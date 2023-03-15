import React, { useRef } from "react";

import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import fetchAuth from "../../api/fetchAuth";

function Login() {
  const [cookies, setCookies] = useCookies(["auth"]);
  // const [loginOk, setLoginOk] = useState(null)
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleClick = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const {token} = await fetchAuth({username, password})
    if(token) {
      setCookies("auth", true);
    }
  };

  return (
    <Container>
      {cookies.auth ? (
        <Navigate replace to="/" />
      ) : (
        <>
          <Row>
            <Col>
              <h1>Login</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <InputGroup>
                  <InputGroup.Text>Username</InputGroup.Text>
                  <Form.Control ref={usernameRef}/>
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroup.Text>Password</InputGroup.Text>
                  <Form.Control type="password" ref={passwordRef} />
                </InputGroup>
                <br />
                <Button onClick={handleClick}>Login</Button>
              </Form>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Login;
