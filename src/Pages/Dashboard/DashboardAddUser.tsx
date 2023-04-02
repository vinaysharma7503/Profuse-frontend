import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row,Alert } from "react-bootstrap";
import toast,{ Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { signupData } from "./Services/dashboardService";

type Props = {}

const DashboardAddUser = (props: Props) => {
    const [cred = { name: "", email: "", password: "" }, setCred] =
    useState<any>();
    const [isLoading, setIsLoading] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState<any>();
  const navigate = useNavigate();

  
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (!cred?.name && !cred?.email && !cred?.password) {
      toast.error('All Fields are required')
    } else if (!cred?.name) {
      toast.error("Name is required");
    } else if (!cred?.email) {
      toast.error("Email is required");
    } else if (!cred?.password) {
      toast.error("Password is required");
    } else if (!confirmPassword) {
      toast.error("Confirm Password is required");
    } else if (cred?.password !== confirmPassword) {
      toast.error("Password & Confirm Password does not match");
    } else {
      signupData(cred,signupDataCB);
    }
  };
  const signupDataCB=(result:any)=>{
        if (result?.status==201) {
          toast.success(result?.message)
          setTimeout(() => {
            navigate('/dashboard',{replace:true})
          }, 1000);
        }
        else {
         toast.error(result?.message);
        }

  }
  return (
    <Container>
        <Toaster/>
        <Row>
          <Col md={12} className="p-4 d-flex flex-column">
            <span className="text-center mb-5">Add New Account</span>
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
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
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
            </Form>
          </Col>
        </Row>
      </Container>
  )
}

export default DashboardAddUser