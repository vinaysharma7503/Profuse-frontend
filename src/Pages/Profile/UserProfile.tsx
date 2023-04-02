import Sidebar from '@Shared/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { getUserProfileData, updateUserProfileData } from './Services/profileService'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

type Props = {}

const UserProfile = (props: Props) => {
  const [userDetail, setUserDetail] = useState<any>()
  useEffect(() => {
    getUserProfileData(getUserProfileDataCB)
  }, [])

  const getUserProfileDataCB = (result: any) => {
    setUserDetail(result?.data?.data?.user)
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    updateUserProfileData(userDetail, updateUserProfileDataCB)
  }
  const updateUserProfileDataCB = (result: any) => {
    if (result.status == 200) {
      toast.success(result?.data?.message)
      setUserDetail(result?.data?.data?.user)
    }
    else {
      toast.error(result?.response?.message)
    }
  }
  return (
    <div className="d-flex vh-100 border">
      <Sidebar />
      <div className="container-fluid vh-75">
        <Toaster />
        <Row>
          <Col className='p-2'>
            <h3 className='text-center'>User Information</h3>
            <Form className="m-auto" onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={userDetail?.name} placeholder="Enter name" onChange={(n) => { setUserDetail({ ...userDetail, name: n.target.value }) }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" value={userDetail?.phone} placeholder="Enter phone" onChange={(p) => { setUserDetail({ ...userDetail, phone: p.target.value }) }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={userDetail?.email} placeholder="Enter email" disabled />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  value={userDetail?.address}
                  placeholder="Enter address"
                  style={{ height: '100px' }}
                  onChange={(a) => { setUserDetail({ ...userDetail, address: a.target.value }) }}
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex justify-content-end" >
                <Button className='m-2' variant="primary" type="submit">Update</Button>
                <Link to={'/dashboard'} className='m-2 btn btn-secondary' >Cancel</Link>
              </Form.Group>
            </Form>
          </Col>
          <Col className='p-2'>
            <h3 className='text-center'>Add Funds</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicAmount">
                <Form.Label>Deposit Amount</Form.Label>
                <Form.Control type="text" placeholder="Enter amount" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Button className='m-2'>Save</Button>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicAmount">
                <Form.Label>Withdraw Amount</Form.Label>
                <Form.Control type="text" placeholder="Enter amount" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Button className='m-2'>Save</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default UserProfile