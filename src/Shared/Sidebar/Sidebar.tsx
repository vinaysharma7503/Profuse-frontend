import React from 'react'
import { Image, Nav } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Siderbar.scss'
import logo  from '../../assets/Images/profile.png'
import dashboard from '../../assets/Images/dashboard.png'
import account from '../../assets/Images/account.png'
import help from '../../assets/Images/help.png'
import logout from '../../assets/Images/logout.png'

type Props = {}

const sidebar = (props: Props) => {
    const name = localStorage.getItem('name')
    const navigate = useNavigate()

    const onLogout = ()=>{
        localStorage.clear()
        navigate('/',{replace:true})
    }
    
  return (
    <div className='sidebar'>
        <div className="d-flex justify-content-center flex-column">
            <Image src={logo} alt='logo' className='m-auto fluid' style={{height:'100px',width:'60%'}}/>
            <span className='m-auto'>{name}</span>
        </div>
        <div className='d-flex flex-column'>
            <nav className='mt-5'>
                <div className='d-flex flex-column'>
                <NavLink to={'/dashboard'} className='navlink '><img src={dashboard} alt="dashboard" className='icon' /> Dashboard</NavLink>
                 <NavLink to={'/Profile'} className='navlink '><img src={account} alt="account" className='icon' /> Account/Profile</NavLink>
                 <NavLink to={'/help'} className='navlink '><img src={help} alt="help" className='icon' /> Help</NavLink>
                <a   className='navlink ' onClick={()=>onLogout()}><img src={logout} alt="logout" className='icon' /> Logout</a>
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