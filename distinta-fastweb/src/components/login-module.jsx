import React from "react";
import {Container,Form,Button} from "react-bootstrap"


    function Login(){

    return(
        <Container>
            <h1 className="loginH1">Login</h1>
                <Form className="loginForm">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Username" name="nameLogin"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" name="passwordLogin"/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
        </Container>
    )
}

export default Login;