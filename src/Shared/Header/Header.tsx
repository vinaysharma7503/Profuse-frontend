import React from "react";
import { Button, Container, Dropdown, Nav, Navbar, NavDropdown,Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate()
  return (
    <Navbar bg="light" expand="lg" className="header">
      <Container>
        <Navbar.Brand><Link to={'/'} className='navbar-brand'>Profuse</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          {/* <Form className="d-flex justify-content-between ms-auto">
            <Link to={'/login'} className="btn ms-3">Login</Link>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
