import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../AppContext'

const UserNavbar = () => {

    const { currentUser, setCurrentUser, loggedIn, setLoggedIn, logout } = useAppContext();
    // console.log(currentUser);
    const [sidebar, setSidebar] = useState(false);
    const showLoginOptions = () => {
        if (!loggedIn) {
            return (
                <>
                    <li className='text-white hover:text-gray-300'><Link to={'/signup'}>Sign Up</Link></li>
                    <li className='text-white hover:text-gray-300'><Link to={'/login'}>Login</Link></li>
                </>
            )
        }
        else {
            return (
                <>
                    <li className='text-white hover:text-gray-300'><Link to={'/user-add-tool'}>Add Tool</Link></li>
                    <li className='text-white hover:text-gray-300'><Link to={'/browse-tools'}>Browse Tools</Link></li>
                    <li className='text-white hover:text-gray-300'><Link to={'/register-issue'}>Register Issue</Link></li>
                    <li className='text-white hover:text-gray-300'><button onClick={logout}>Logout</button></li>
                    {
                        currentUser?
                            (<li className='text-white text-center hover:text-gray-300'><img className='w-10 h-10 rounded-full' alt='profile-image' src={'http://localhost:3000/uploads/' + currentUser.image} /></li>)
                            : <li className='text-white text-center hover:text-gray-300'><img className='w-10 h-10 rounded-full' alt='profile-icon' src='https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg' /></li>
                    }
                </>
            )
        }
    }

    return (
        <>
            <nav className='md:sticky z-10 md:top-0 shadow-xl bg-gray-800 p-4 flex justify-between items-center'>
                <div className='text-white font-semibold text-xl'> <Link to={'/'} >Tool Issue Management System</Link> </div>
                <div className='hidden md:block'>
                    <ul className='flex gap-5 items-center'>
                        {showLoginOptions()}
                    </ul>
                </div>
                <div className='md:hidden cursor-pointer' onClick={() => { setSidebar(!sidebar) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
                <div className={sidebar ? 'absolute z-10 bg-gray-800 left-0 w-48 top-0 h-full text-center' : 'hidden'}>
                    <div>
                        <ul className='flex gap-5 flex-col py-5 text-white'>
                            {/* <li className='text-white hover:text-gray-300'><Link to={'/register-issue'}>Register Issue</Link></li> */}
                            {
                                !loggedIn ?
                                    (
                                        <>
                                            <li className='text-white hover:text-gray-300'><Link to={'/signup'}>Sign Up</Link></li>
                                            <li className='text-white hover:text-gray-300'><Link to={'/login'}>Login</Link></li>
                                        </>
                                    )
                                    : (
                                        <>
                                            <li className='text-white hover:text-gray-300'><Link to={'/user-add-tool'}>Add Tool</Link></li>
                                            <li className='text-white hover:text-gray-300'><Link to={'/browse-tools'}>Browse Tools</Link></li>
                                            <li className='text-white hover:text-gray-300'><Link to={'/register-issue'}>Register Issue</Link></li>
                                            <li className='text-white hover:text-gray-300'><button type='submit' onClick={logout}>Logout</button></li>
                                            {/* {
                                                currentUser && currentUser.image ?
                                                    (<li className='text-white text-center hover:text-gray-300'><img className='w-10 h-10 rounded-full' alt='profile-image' src={'http://localhost:3000/uploads/' + currentUser.image} /></li>)
                                                    : <li className='text-white text-center hover:text-gray-300'><img className='w-10 h-10 rounded-full' alt='profile-icon' src='https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg' /></li>
                                            } */}
                                        </>
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default UserNavbar