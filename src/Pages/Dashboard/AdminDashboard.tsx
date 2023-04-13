import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { changeUserStatusData, deleteProductData, deleteUserData, getProductListData, getUserListData } from './Services/dashboardService'
import './Dashboard.scss'

type Props = {}

const AdminDashboard = (props: Props) => {
  const [usersList, setUsersList] = useState<any>([]);
  const [ProductList, setProductList] = useState<any>([]);
  const [page, setPage] = useState(1)
  useEffect(() => {
    getUserListData(page, usersListDataCB)
    getProductListData(page,productsListDataCB)
  }, [])

  const usersListDataCB = (result: any) => {
    if (result.status == 200) {
      console.log(result?.data?.data?.users?.docs);

      setUsersList(result?.data?.data?.users)
    }
  }
  const productsListDataCB = (result: any) => {
    if (result.status == 200) {
      console.log(result?.data?.data?.users?.docs);

      setProductList(result?.data?.data?.products)
    }
  }

  const changeUserStatus = (id: any) => {
    let data = {
      _id: id
    }
    changeUserStatusData(data, changeUserStatusDataCB)
  }

  const changeUserStatusDataCB = (result: any) => {
    if (result.status == 200) {
      getUserListData(page, usersListDataCB)
    }
  }
  const deleteUser = (id: any) => {
    let data = {
      _id: id
    }
    deleteUserData(data, deleteUserDataCB)
  }

  const deleteUserDataCB = (result: any) => {
    if (result.status == 200) {
      getUserListData(page, usersListDataCB)
    }
  }
  const deleteProduct = (id: any) => {
    let data = {
      _id: id
    }
    deleteProductData(data, deleteProductDataCB)
  }

  const deleteProductDataCB = (result: any) => {
    if (result.status == 200) {
      getProductListData(page,productsListDataCB)
    }
  }

  const productTableRowView = (data: any, index: any) => {
    return <tr key={index}>
      <td>{data?.product_name}</td>
      <td>{data?.product_description}</td>
      <td>{data?.product_offering1},{data?.product_offering2},{data?.product_offering3}</td>
      <td>{data?.product_amount}</td>
      <td>{data?.category_id?.category_description}</td>
      <td><Link to={''} className='text-decoration-none me-4' onClick={() => { deleteProduct(data?._id) }}>Delete</Link></td>
    </tr>
  }
  const tableRowView = (data: any, index: any) => {
    return <tr key={index}>
      <td>{data?.name}</td>
      <td>{data?.email}</td>
      <td>{data?.status == true ? 'Active' : 'Block'}</td>
      <td className='d-flex'>
        <Link to={''} className='text-decoration-none me-4' onClick={() => { changeUserStatus(data?._id) }}>{data?.status == true ? 'Block' : 'UnBlock'}</Link>
        <Link to={''} className='text-decoration-none me-4' onClick={() => { deleteUser(data?._id) }}>Delete</Link>
      </td>
    </tr>
  }

  return (
    <Container fluid={true}>
      <Row>
        <Col className='p-2 column'>
          <div className="d-flex justify-content-between mb-5">
            <span>Manage Products/Categories</span>
            <div className="d-flex justify-content-between">
              <Link to={'/dashboard/add-product'} className='btn btn-primary me-2'>Add Product</Link>
              <Link to={'/dashboard/add-category'} className='btn btn-primary me-2'>Add Category</Link>
            </div>
          </div>
          <Table striped>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Offering</th>
                <th>Product Amount</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ProductList?.docs && ProductList?.docs.map((product: any, index: any) => productTableRowView(product, index))}
            </tbody>
          </Table>
        </Col>
        <Col className='p-2 column'>
          <div className="d-flex justify-content-between mb-5">
            <span>Manage Users</span>
            <Link to='/dashboard/add-user' className='btn btn-primary'>Add New User</Link>
          </div>
          <Table striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersList?.docs && usersList?.docs.map((user: any, index: any) => tableRowView(user, index))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminDashboard