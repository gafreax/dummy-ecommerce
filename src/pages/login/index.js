import React, { useRef } from "react";
import { useCookies } from "react-cookie";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";

// import css

import fetchAuth from "../../api/fetchAuth";

// import components

function Login() {
	const [ cookies, setCookies ] = useCookies(["auth"]);
	// const [loginOk, setLoginOk] = useState(null)
	const usernameRef = useRef();
	const passwordRef = useRef();

	const handleClick = async () => {
		const username = usernameRef.current.value;
		const password = passwordRef.current.value;
		const { token } = await fetchAuth({ username, password })
		if( token ) {
			setCookies("auth", true);
		}
	};

	if(cookies.auth) {
		return <Navigate replace to="/" />;
	}
	return (
		<Container>
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
		</Container>
	);
}

export default Login;
