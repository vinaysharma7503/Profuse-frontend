import Sidebar from "@Shared/Sidebar/Sidebar";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Dashboard.scss";
import Chart from 'react-apexcharts'

type Props = {};

const UserDashboard = (props: Props) => {
    const [amountChart,setAmountChart] = useState<any>({
          
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      })
  return (
    <Container fluid={true} className="maincontainer">
      <Row>
        <Col lg={3} className="d-flex flex-column justify-content-between p-2 border">
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Account Balance</Card.Title>
            </Card.Header>
            <Card.Body>
            <h6>Available Funds</h6>
              <span>2000</span>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Vested Amount</Card.Title>
            </Card.Header>
            <Card.Body>
              <span>5000</span>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Total Balance</Card.Title>
            </Card.Header>
            <Card.Body>
              <span>Your account is eligble to save upto $5000</span><br />
              <span>2000</span>
            </Card.Body>
          </Card>
          {/* <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>UnUsed Funds</Card.Title>
            </Card.Header>
            <Card.Body>
              <span>1000</span>
            </Card.Body>
          </Card> */}
          {/* <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Invested Amount</Card.Title>
            </Card.Header>
            <Card.Body>500</Card.Body>
          </Card> */}
        </Col>
        <Col lg={9} className='d-flex justify-content-between p-2 border'>
        <Card style={{ width: "55%" }}>
            <Card.Header>
              <Card.Title>Invested Amount</Card.Title>
            </Card.Header>
            <Card.Body>
            <Chart options={amountChart.options} series={amountChart.series} type="donut" width={450} height={'auto'} />
            </Card.Body>
          </Card>
          <div className="d-flex flex-column justify-content-between">
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Total Balance</Card.Title>
            </Card.Header>
            <Card.Body>
              <span>Your account is eligble to save upto $5000</span>
              <span>2000</span>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Total Balance</Card.Title>
            </Card.Header>
            <Card.Body>
              <span>Your account is eligble to save upto $5000</span>
              <span>2000</span>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Total Balance</Card.Title>
            </Card.Header>
            <Card.Body>
              <span>Your account is eligble to save upto $5000</span>
              <span>2000</span>
            </Card.Body>
          </Card>
          </div>
        </Col>
        <Col lg={12} className="d-flex justify-content-between p-2">
          
          {/* <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Sanctioned Amount</Card.Title>
            </Card.Header>
            <Card.Body>
              <span>5000</span>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Loan Amount</Card.Title>
            </Card.Header>
            <Card.Body>
              <span>1000</span>
            </Card.Body>
          </Card> */}
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
