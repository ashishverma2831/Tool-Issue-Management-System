import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AdminHome = () => {
  return (
    <>
      <AdminNavbar />
      <h1 className='text-4xl  text-center my-4'> Admin Home </h1>

      {/* <Link to={'/add-tool'} className='border px-4 py-2 rounded'>Add Tool</Link> */}
    </>
  )
}

export default AdminHome