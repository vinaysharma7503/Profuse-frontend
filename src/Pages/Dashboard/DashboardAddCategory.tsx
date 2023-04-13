import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { categoryData } from './Services/dashboardService';
import toast,{ Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

type Props = {}

const DashboardAddCategory = (props: Props) => {
  const [addCategory={category_description:""},setAddCategory]=useState<any>()
  const navigate = useNavigate();
  const onSubmit = (event: any) => {
    event.preventDefault();
    categoryData(addCategory,categoryDataCB);
  };
  const categoryDataCB=(result:any)=>{
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
          <span className="text-center mb-5">Add New Category</span>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicProductDescription">
              <Form.Label>Category Description</Form.Label>
              <Form.Control as="textarea"
          style={{ height: '100px' }} placeholder="Enter category description" onChange={(c:any)=>setAddCategory({category_description:c.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Button className='m-2' type='submit'>Save</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default DashboardAddCategory