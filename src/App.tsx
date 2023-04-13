import { lazy, Suspense, useState } from 'react'
import './App.scss'
import { useRoutes } from 'react-router-dom'
import ProtectedRoutes from "./Hoc/ProtectedRoutes";
import AuthRoutes from "./Hoc/AuthRoutes";
const LandingPage = lazy(()=>import("@Pages/Landing/Landing"));
const SignupPage = lazy(()=>import("@Pages/Signup"));
const DashboardPage = lazy(()=>import("@Pages/Dashboard/Dashboard"));
const HelpPage = lazy(()=>import("@Pages/Help/Help"));
const UserDashboardPage = lazy(()=>import("@Pages/Dashboard/UserDashboard"));
const AdminDashboardPage = lazy(()=>import("@Pages/Dashboard/AdminDashboard"));
const AddUserPage = lazy(()=>import("@Pages/Dashboard/DashboardAddUser"));
const AddCategoryPage = lazy(()=>import("@Pages/Dashboard/DashboardAddCategory"));
const AddProductPage = lazy(()=>import("@Pages/Dashboard/DashboardAddProduct"));
const UserProfilePage = lazy(()=>import("@Pages/Profile/UserProfile"));
const AdminProfilePage = lazy(()=>import("@Pages/Profile/AdminProfile"));

const App=()=>{
  const role = localStorage.getItem('role')
  const routes = useRoutes([
    { path: '/', element:<ProtectedRoutes element={ <LandingPage/> }/>},
    { path: '/signup', element:<ProtectedRoutes element={ <SignupPage/> }/>},
    { path: '/dashboard', element:<AuthRoutes element={ <DashboardPage/>}/>,children:[
      { path: '', element: role && role=='User'?<UserDashboardPage/>:<AdminDashboardPage/> },
      { path: 'add-user', element:<AuthRoutes element={ <AddUserPage/>}/>},
      { path: 'add-category', element:<AuthRoutes element={ <AddCategoryPage/>}/>},
      { path: 'add-product', element:<AuthRoutes element={ <AddProductPage/>}/>},
    ] },
    { path: '/profile', element:<AuthRoutes element={ role && role=='User'?<UserProfilePage/>:<AdminProfilePage/>}/>},
    { path: '/help', element:<AuthRoutes element={ <HelpPage/>}/>},
  ])

  return (
    <>
   <Suspense fallback='Loading...'>{routes}</Suspense>
   </>
  )
}

export default App
