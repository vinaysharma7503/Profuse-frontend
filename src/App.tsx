import { lazy, Suspense, useState } from 'react'
import './App.scss'
import { useRoutes } from 'react-router-dom'
const LandingPage = lazy(()=>import("@Pages/Landing/Landing"));
const SignupPage = lazy(()=>import("@Pages/Signup"));
const DashboardPage = lazy(()=>import("@Pages/Dashboard/Dashboard"));
const UserDashboardPage = lazy(()=>import("@Pages/Dashboard/UserDashboard"));
const AdminDashboardPage = lazy(()=>import("@Pages/Dashboard/AdminDashboard"));

const App=()=>{
  const routes = useRoutes([
    { path: '/', element: <LandingPage/> },
    { path: '/signup', element: <SignupPage/> },
    { path: '/dashboard', element: <DashboardPage/>,children:[
      { path: '', element: <UserDashboardPage/> }
    ] },
  ])

  return (
    <>
   <Suspense fallback='Loading...'>{routes}</Suspense>
   </>
  )
}

export default App
