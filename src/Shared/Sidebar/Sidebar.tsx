import React from 'react'
import { Image, Nav } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import './Siderbar.scss'
import logo  from '../../assets/react.svg'

type Props = {}

const sidebar = (props: Props) => {
    
  return (
    <div className='sidebar'>
        <div className="flex justify-content-center">
            {/* <h1 className='text-center'>CIMS</h1> */}
            {/* <img src={logo} alt="logo" style={{height:'120px',width:'100%'}} /> */}
            <Image src={logo} alt='logo' className='fluid' style={{height:'90px',width:'100%'}}/>
        </div>
        <div className='d-flex flex-column'>
            <nav className='mt-5'>
                <div className='d-flex flex-column'>
                <NavLink to={'/dashboard'} className='navlink '>Dashboard</NavLink>
                {/* <NavLink to={'/students'} className='navlink '>Students</NavLink>
                <NavLink to={'/employees'} className='navlink '>Employee</NavLink>
                <NavLink to={'/attendence'} className='navlink '>Attendence</NavLink>
                <NavLink to={'/batches'} className='navlink '>Batches</NavLink>
                <NavLink to={'/courses'} className='navlink '>Courses</NavLink>
                <NavLink to={'/payments'} className='navlink '>Payments</NavLink>
                <NavLink to={'/contact'} className='navlink '>Contact</NavLink> */}
                <NavLink to={'/'} className='navlink '>Logout</NavLink>
                </div>
            </nav>
        </div>
        <div className="mt-2 footer">
            <p className='text-muted text-center'>Beta Version 1.0.0</p>
            {/* <p className='text-muted text-center'>Powered By <br/> ASCORP TECHNOLOGIES</p> */}
        </div>
    </div>
  )
}

export default sidebar