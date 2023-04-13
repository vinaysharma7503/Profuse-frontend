import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { getCategoryListData, productData } from './Services/dashboardService'
import toast,{ Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

type Props = {}

const DashboardAddProduct = (props: Props) => {
  const [addProduct= { prodct_name: "", product_description: "", product_offering1: "",product_offering2:"",product_offering3:"",product_amount:"",category_id:"" },setAddProduct]= useState<any>()
  const [categoryList,setCategoryList]= useState<any>()
  const [page, setPage] = useState(1)
  const navigate = useNavigate();

  useEffect(() => {
    getCategoryListData(page,getCategoryListDataCB)
  }, [])

  const getCategoryListDataCB = (result: any) => {
    setCategoryList(result?.data?.data)
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    productData(addProduct,productDataCB);
  };
  const productDataCB=(result:any)=>{
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
          <span className="text-center mb-5">Add New Product</span>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter product name"  onChange={(n) => setAddProduct({ ...addProduct, product_name: n.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProductDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control type="text" placeholder="Enter product description" onChange={(d) => setAddProduct({ ...addProduct, product_description: d.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProductOffering">
              <Form.Label>Product Offering 1</Form.Label>
              <Form.Control type="text" placeholder="Enter product offering" onChange={(po) => setAddProduct({ ...addProduct, product_offering1: po.target.value })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProductOffering">
              <Form.Label>Product Offering 2</Form.Label>
              <Form.Control type="text" placeholder="Enter product offering" onChange={(poo) => setAddProduct({ ...addProduct, product_offering2: poo.target.value })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProductOffering">
              <Form.Label>Product Offering 3</Form.Label>
              <Form.Control type="text" placeholder="Enter product offering" onChange={(pooo) => setAddProduct({ ...addProduct, product_offering3: pooo.target.value })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProductOffering">
              <Form.Label>Product Amount</Form.Label>
              <Form.Control type="text" placeholder="Enter product amount" onChange={(pa) => setAddProduct({ ...addProduct, product_amount: pa.target.value })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProductCategory">
              <Form.Label>Product Category</Form.Label>
              <Form.Select aria-label="Default select example" onChange={(pc) => setAddProduct({ ...addProduct, category_id: pc.target.value })}>
                <option>Select Category</option>
                {categoryList?.categories?.docs&&categoryList?.categories?.docs.map((category:any)=>{
                  return(<option key={category?._id} value={category?._id}>{category?.category_description}</option>)
                })}
                
              </Form.Select>
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

export default DashboardAddProduct