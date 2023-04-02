import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getUserListData } from './Services/dashboardService'
import './Dashboard.scss'

type Props = {}

const AdminDashboard = (props: Props) => {
  const [usersList, setUsersList] = useState<any>([]);
  const [page, setPage] = useState(1)
  useEffect(() => {
    getUserListData(page, usersListDataCB)
  }, [])

  const usersListDataCB = (result: any) => {
    if (result.status == 200) {
      console.log(result?.data?.data?.users?.docs);

      setUsersList(result?.data?.data?.users)
    }
  }

  const tableRowView = (data: any, index: any) => {
   return <tr key={index}>
      <td>{data?.name}</td>
      <td>{data?.email}</td>
      <td>{data?.status==true?'Active':'Block'}</td>
      <td className='d-flex'>
        <Link to={''} className='text-decoration-none me-4'>{data?.status==true?'Block':'UnBlock'}</Link>
        <Link to={''} className='text-decoration-none me-4'>Delete</Link>
      </td>
    </tr>
  }

  return (
    <Container fluid={true}>
      <Row>
        <Col className='p-2 column'></Col>
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