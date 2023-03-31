import React from 'react'
import { Navigate } from 'react-router-dom';

type Props = {
    element:any
}

const ProtectedRoutes = (props: Props) => {
    const { element } = props;
    const token =  localStorage.getItem('token');
    const auth =  localStorage.getItem('auth');
  return (token && auth=='true' && auth)?<Navigate to={'/dashboard'} replace={true}/>:element
}

export default ProtectedRoutes