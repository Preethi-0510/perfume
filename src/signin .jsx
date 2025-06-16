// SignInPage.js
import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link

function SignInPage() {
  return (
    <>
    <section id="signin" >
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#6f4e36", // Coffee brown background
          fontFamily: "Segoe UI, sans-serif"
        }}
      >
    <Container className="my-5"> 
      <Row className="justify-content-center">
        <Col md={6}>
        <br/><br/><br/>
          <Card style={{backgroundColor: "#fdf6f0"}}>
            <Card.Body>
              <h2 className="text-center mb-4">Sign In</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
              <p className="text-center mt-3">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    </section>
    </>
  );
}

export default SignInPage;