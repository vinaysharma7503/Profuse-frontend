import Login from "@Pages/Login";
import Header from "@Shared/Header/Header";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

type Props = {};

const Landing = (props: Props) => {
  return (
    <>
      <Header />
      <Container className="vh-75">
        <Row className="p-2">
          <Col className="border p-2" md={2}></Col>
          <Col className="border p-2" md={6}></Col>
          <Col
            className="border p-2 d-flex flex-column justify-content-center align-items-center"
            md={4}
          >
            {/* <Card style={{ width: "18rem", marginTop: "5px" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", marginTop: "5px" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card> */}
            <Login/>
          </Col>
        </Row>
        <Row className="p-2">
          <Col className="border p-2 d-flex flex-wrap justify-content-between">
            <Card style={{ width: "25rem", marginTop: "5px" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem", marginTop: "5px" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem", marginTop: "5px" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Landing;
