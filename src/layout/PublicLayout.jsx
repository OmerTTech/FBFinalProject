import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const PublicLayout = ({children}) => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main">
            {children}
        </div>
      </div>
    </>
  )
}

export default PublicLayout