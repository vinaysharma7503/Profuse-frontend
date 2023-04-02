import Sidebar from '@Shared/Sidebar/Sidebar'
import React from 'react'

type Props = {}

const Help = (props: Props) => {
  return (
    <div className="d-flex vh-100 border">
      <Sidebar />
      <div className="container-fluid vh-75 d-flex justify-content-center align-items-center">
        <span>Coming Soon...</span>
      </div>
      </div>
  )
}

export default Help