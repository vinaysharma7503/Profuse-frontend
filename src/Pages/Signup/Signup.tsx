import Header from "@Shared/Header/Header";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row,Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  SignupReducer: any;
  signupData: any;
};

const Signup = (props: Props) => {
  const { userInfo } = props?.SignupReducer;
  const { isLoading, data = null, isAuth, error = null } = userInfo;
  const [cred = { name: "", email: "", password: "" }, setCred] =
    useState<any>();
  const [confirmPassword, setConfirmPassword] = useState<any>();
  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (!cred?.name && !cred?.email && !cred?.password) {
      return (<Alert variant="warning">All Fields are required</Alert>)
    } else if (!cred?.name) {
      alert("Name is required");
    } else if (!cred?.email) {
      alert("Email is required");
    } else if (!cred?.password) {
      alert("Password is required");
    } else if (!confirmPassword) {
      alert("Confirm Password is required");
    } else if (cred?.password !== confirmPassword) {
      alert("Password & Confirm Password does not match");
    } else {
      props?.signupData(cred);
    }
  };
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={12} className="p-4 d-flex flex-column">
            <span className="text-center mb-5">Create New Account</span>
            <Form className="m-auto" onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={cred?.name}
                  placeholder="Enter name"
                  onChange={(n) => setCred({ ...cred, name: n.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={cred?.email}
                  placeholder="Enter email"
                  onChange={(e) => setCred({ ...cred, email: e.target.value })}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={cred?.password}
                  placeholder="Password"
                  onChange={(p) =>
                    setCred({ ...cred, password: p.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  onChange={(cp) => setConfirmPassword(cp.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
              <Link
                to="/"
                className="text-secondary text-decoration-none text-center"
              >
                Already have an account.
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
