import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack';

const AdminNavbar = () => {

    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false)
    const adminLogout = () => {
        sessionStorage.removeItem('admin');
        navigate('/admin');
        enqueueSnackbar('Admin Logged out successfully', { variant: 'success' })
    }
    
    return (
        <>
            <nav className='sticky top-0 shadow-xl bg-gray-800 p-5 flex justify-between items-center'>
                <div className='text-white font-semibold text-xl'> <Link to={'/admin-home'}>Tool Issue Management System</Link> </div>
                <div className='hidden md:block'>
                    <ul className='flex gap-5 '>
                        <li><Link to={'/add-tool'} className='text-white'>Add Tool</Link></li>
                        <li><Link to={'/tool-list'} className='text-white'>Tool List</Link></li>
                        <li><Link to={'/view-issues'} className='text-white'>Issue List</Link></li>
                        <li><button onClick={() => { adminLogout() }} className='text-white hover:text-gray-400 '>Logout</button></li>
                    </ul>
                </div>
                <div className='md:hidden cursor-pointer' onClick={() => { setSidebar(!sidebar) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
                <div className={sidebar ? 'absolute bg-gray-800 left-0 w-48 top-0 h-full text-center' : 'hidden'}>
                    <div>
                        <ul className='flex gap-5 flex-col py-5'>
                            <li><Link to={'/add-tool'} className='text-white'>Add Tool</Link></li>
                            <li><Link to={'/tool-list'} className='text-white'>Tool List</Link></li>
                            <li><Link to={'/view-issues'} className='text-white'>Issue List</Link></li>
                            <li><button onClick={() => { adminLogout() }} className='text-white hover:text-gray-400 '>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar