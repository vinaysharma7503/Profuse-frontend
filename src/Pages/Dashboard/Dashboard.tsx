import Sidebar from '@Shared/Sidebar/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="d-flex vh-100 border">
      <Sidebar />
      <div className="container-fluid vh-75 overflow-auto">
          <Outlet />
        </div>
      </div>
  )
}

export default Dashboard