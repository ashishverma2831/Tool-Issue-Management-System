import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import Hero3 from '../components/Hero3'
import UserFooter from '../components/UserFooter'

const AdminHome = () => {
  return (
    <>
      <AdminNavbar />
      {/* <h1 className='text-4xl  text-center my-4'> Admin Home </h1> */}
      <Hero />
      <Hero2 />
      <Hero3 />
      <UserFooter />

      {/* <Link to={'/add-tool'} className='border px-4 py-2 rounded'>Add Tool</Link> */}
    </>
  )
}

export default AdminHome