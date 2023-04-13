import Sidebar from "@Shared/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import "./Dashboard.scss";
import Chart from 'react-apexcharts'
import { getProductListData, getTransactionsListData, getUserDashboardData, investAmountData } from "./Services/dashboardService";
import { Link } from "react-router-dom";
import toast,{ Toaster } from "react-hot-toast";

type Props = {};

const UserDashboard = (props: Props) => {
  const [amountChart, setAmountChart] = useState<any>({

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
  const [dashboardData, setDashbaordData] = useState<any>()
  const [ProductList, setProductList] = useState<any>([]);
  const [TransactionsList, setTransactionsList] = useState<any>([]);
  const [page, setPage] = useState(1)
  const [show, setShow] = useState(false)
  const [productData, setProductData] = useState<any>()
  const [investData={product_id:productData?._id,invest_percent:'',invest_amount:''},setInvestData]= useState<any>()

  useEffect(() => {
    getUserDashboardData(getUserDashboardDataCB)
    getProductListData(page, productsListDataCB)
    getTransactionsListData(page, transactionsListDataCB)
  }, [])

  const getUserDashboardDataCB = (result: any) => {
    setDashbaordData(result?.data?.data)
  }

  const productsListDataCB = (result: any) => {
    if (result.status == 200) {
      setProductList(result?.data?.data?.products)
    }
  }
  const transactionsListDataCB = (result: any) => {
    if (result.status == 200) {
      setTransactionsList(result?.data?.data?.transactions)
    }
  }

  const productTableRowView = (data: any, index: any) => {
    return <tr key={index}>
      <td>{data?.product_name}</td>
      {/* <td>{data?.product_description}</td> */}
      {/* <td>{data?.product_offering1},{data?.product_offering2},{data?.product_offering3}</td> */}
      <td>{data?.product_amount}</td>
      {/* <td>{data?.category_id?.category_description}</td> */}
      <td><Link to='' className="text-decoration-none" onClick={() => { getProductData(data) }}>Invest</Link></td>
    </tr>
  }
  const productInvestTableRowView = (data: any, index: any) => {
    return <tr key={index}>
      <td>{data?.product_id?.product_name}</td>
      {/* <td>{data?.product_description}</td> */}
      {/* <td>{data?.product_offering1},{data?.product_offering2},{data?.product_offering3}</td> */}
      <td>{data?.amount}</td>
      {/* <td>{data?.category_id?.category_description}</td> */}
      <td><Link to='' className="text-decoration-none">Cancel</Link></td>
    </tr>
  }

  const getProductData = (data: any) => {
    setShow(true)
    setProductData(data)
  }

  const onSubmit = (event:any)=>{
    event.preventDefault()
    investAmountData(investData,investAmountDataCB)
  }

  const investAmountDataCB = (result:any)=>{
    if (result?.status==200) {
      toast.success(result?.data?.message)
      getUserDashboardData(getUserDashboardDataCB)
    getProductListData(page, productsListDataCB)
    getTransactionsListData(page, transactionsListDataCB)
    setShow(false)
    } else {
      toast.error(result?.response?.data?.message)
      setShow(false)
    }
  }

  return (
    <Container fluid={true} className="maincontainer">
      <Toaster/>
      <Row>
        <Col lg={3} className="d-flex flex-column justify-content-between p-2 border">
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Account Balance</Card.Title>
            </Card.Header>
            <Card.Body>
              <h6>Available Funds</h6>
              <span>{dashboardData?.accountData?.account_balance}</span>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Vested Amount</Card.Title>
            </Card.Header>
            <Card.Body>
              <span>{dashboardData?.accountData?.vested_balance}</span>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Card.Title>Total Balance</Card.Title>
            </Card.Header>
            <Card.Body className="d-flex flex-column">
              <span>Your account is eligble to save upto $5000</span>
              <span>{dashboardData?.accountData?.account_balance + dashboardData?.accountData?.vested_balance}</span>
            </Card.Body>
          </Card>
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
          <div className="d-flex overflow-auto">
          <Table striped>
              <thead>
                <tr>
                  <th>Product Name</th>
                  {/* <th>Product Description</th> */}
                  {/* <th>Product Offering</th> */}
                  <th>Balance Available</th>
                  {/* <th>Category</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {TransactionsList?.docs && TransactionsList?.docs.map((transaction: any, index: any) => productInvestTableRowView(transaction,index))}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col lg={12} className="d-flex justify-content-between p-2">
          <Col lg={8} className="p-2 border">
            <Table striped>
              <thead>
                <tr>
                  <th>Product Name</th>
                  {/* <th>Product Description</th> */}
                  {/* <th>Product Offering</th> */}
                  <th>Balance Available</th>
                  {/* <th>Category</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ProductList?.docs && ProductList?.docs.map((product: any, index: any) => productTableRowView(product, index))}
              </tbody>
            </Table>
          </Col>
          <Col lg={4} className="d-flex justify-content-center p-2 border">
            {show && <Card style={{ width: "18rem" }}>
              <Card.Header>
                <Card.Title>{productData?.product_name}</Card.Title>
                <Card.Subtitle>{productData?.product_description}</Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <div className="d-flex ">
                  <span>{productData?.category_id?.category_description}</span>
                  <div className="d-flex flex-column">
                    <Form onSubmit={onSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicGroup">
                        <Form.Check
                          type='radio'
                          name="product_offering"
                          id={`default-${productData?.product_offering1}`}
                          label={`${productData?.product_offering1}`}
                          onChange={()=>setInvestData({...investData,invest_percent:productData?.product_offering1})}
                        />
                        <Form.Check
                          type='radio'
                          name="product_offering"
                          id={`default-${productData?.product_offering2}`}
                          label={`${productData?.product_offering2}`}
                          onChange={(b)=>setInvestData({...investData,invest_percent:productData?.product_offering2})}
                        />
                        <Form.Check
                          type='radio'
                          name="product_offering"
                          id={`default-${productData?.product_offering3}`}
                          label={`${productData?.product_offering3}`}
                          onChange={(c)=>setInvestData({...investData,invest_percent:productData?.product_offering3})}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicAmount">
                        <Form.Label>Invest Amount</Form.Label>
                        <Form.Control type="text" placeholder="Enter amount" onChange={(am)=>setInvestData({...investData,invest_amount:am.target.value})} />
                      </Form.Group>
                      <Form.Group className="mb-3 d-flex" >
                        <Button className='m-2' type='submit'>Invest</Button>
                        <Button className='m-2' type='reset'>Cancel</Button>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>}
          </Col>

        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
