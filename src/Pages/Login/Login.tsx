import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  LoginReducer:any,
  loginData:any
};

const Login = (props: Props) => {
  console.log('props',props);
  
  const {userInfo} = props?.LoginReducer;
  const {isLoading,data=null,isAuth,error=null}= userInfo;
  const [cred={email:'',password:''},setCred] = useState<any>()
  const navigate = useNavigate()
  const onSubmit =  (event:any)=>{
    event.preventDefault();
    if (!cred?.email && !cred?.password) {
      alert('Invalid Email & Password')
    }else if(!cred?.email){
      alert('Email is required')
    }else if(!cred?.password){
      alert('Password is required')
    }
    else{
      // navigate('/dashboard',{replace:true})
      props.loginData(cred)
    }
    
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="p-4 d-flex flex-column">
            <span className="text-center mb-5">Login In to My Account</span>
            <Form className="m-auto" onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={cred?.email} placeholder="Enter email" onChange={(e)=>{setCred({...cred,email:e.target.value})}} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={cred?.password} onChange={(p)=>{setCred({...cred,password:p.target.value})}} placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Form.Group className="mb-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              </Form.Group>
              <Link to='/signup' className="text-secondary text-decoration-none text-center">Create a new account.</Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
