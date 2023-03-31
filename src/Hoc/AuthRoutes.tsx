import React from 'react'
import { Navigate } from 'react-router-dom';

type Props = {
    element:any
}

const AuthRoutes = (props: Props) => {
    const { element } = props;
    const token =  localStorage.getItem('token');
    const auth =  localStorage.getItem('auth');
  return (token && auth=='true' && auth)?element:<Navigate to={'/'} replace={true}/>
}

export default AuthRoutes