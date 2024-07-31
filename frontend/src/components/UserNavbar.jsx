import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
    const [sidebar, setSidebar] = useState(false)
    return (
        <>
            <nav className='bg-gray-800 p-5 flex justify-between items-center'>
                <div className='text-white font-semibold text-xl'> <Link to={'/'} >Tool Issue Management System</Link> </div>
                <div className='hidden md:block'>
                    <ul className='flex gap-5 '>
                        <li className='text-white hover:text-gray-300'><Link to={'/register-issue'}>Issues</Link></li>
                        <li className='text-white hover:text-gray-300'><Link to={'/signup'}>Sign Up</Link></li>
                        <li className='text-white hover:text-gray-300'><Link to={'/login'}>Login</Link></li>
                    </ul>
                </div>
                <div className='md:hidden cursor-pointer' onClick={() => { setSidebar(!sidebar) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
                <div className={sidebar ? 'absolute bg-gray-800 left-0 w-48 top-0 h-full text-center' : 'hidden'}>
                    <div>
                        <ul className='flex gap-5 flex-col py-5 text-white'>
                            <li className='text-white hover:text-gray-300'><Link to={'/register-issue'}>Issues</Link></li>
                            <li className='text-white hover:text-gray-300'><Link to={'/signup'}>Sign Up</Link></li>
                            <li className='text-white hover:text-gray-300'><Link to={'/login'}>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default UserNavbar