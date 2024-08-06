import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack';
import useAppContext from '../AppContext'
import UserNavbar from './UserNavbar';
import UserFooter from './UserFooter';

const Login = () => {

    const [passwordHidden, setPasswordHidden] = useState(true);
    const {currentUser,setCurrentUser,loggedIn,setLoggedIn,logout} = useAppContext();
    const navigate = useNavigate();
    // console.log(currentUser);
    const loginForm = useFormik({
        initialValues: {
            name: '',
            password: ''
        },
        onSubmit: async (values) => {
            console.log(values)
            const res = await fetch('http://localhost:3000/user/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify(values)
            })

            if (res.status === 200) {
                enqueueSnackbar('Login in successfully', { variant: 'success' })
                const data = await res.json();
                sessionStorage.setItem('user', JSON.stringify(data))
                setLoggedIn(true);
                navigate('/');
            }
            else if (res.status === 401) {
                enqueueSnackbar('Invalid Credentials', { variant: 'error' })
            }
            else {
                enqueueSnackbar("Error Occured! Try again later.", { variant: 'error' });
            }
        }
    })

    return (
        <>
        <UserNavbar />
            <section className='w-full py-10 mx-auto bg-blue-500/50 flex justify-center items-center'>
                <div className='my-8 flex flex-col gap-4 bg-blue-200 max-w-screen-xl p-10 shadow-xl rounded'>
                    <h1 className='text-3xl font-bold text-center'>Login</h1>
                    <form className='w-full' onSubmit={loginForm.handleSubmit}>
                        <div className='w-full flex flex-col gap-1 mb-4'>
                            <label htmlFor='name'>Name</label>
                            <input placeholder='Enter your name' onChange={loginForm.handleChange} value={loginForm.values.name} className='p-2 outline-none border-none rounded' type='text' id='name' />
                        </div>
                        <div className='w-full flex flex-col gap-1  mb-8'>
                            <label htmlFor='password'>Password</label>
                            <div className='relative flex'>
                                <input
                                    type={passwordHidden ? 'password' : 'text'}
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className='p-2 w-full outline-none border-none rounded '
                                    onChange={loginForm.handleChange}
                                    value={loginForm.values.password}
                                />
                                <button type='button' className='absolute top-2 right-2' onClick={() => { setPasswordHidden(!passwordHidden) }}>{passwordHidden ? <i className="fa-solid fa-eye"></i> : <i className="fa-regular fa-eye"></i>}</button>
                            </div>
                        </div> 
                        {/* <div className='w-full flex flex-col gap-1'>
                    <label>Picture</label>
                    <input type='file' />
                </div> */}
                        <div className='w-full flex mt-4'>
                            <button className='shadow-xl text-center w-full bg-gray-800  py-3 rounded hover:bg-gray-600 text-white text-xl ' type='submit'>Login</button>
                        </div>
                    </form>
                    <p>Don't have an account...? <Link className='text-purple-900' to={'/signup'}>Create account</Link></p>
                </div>
            </section>
            <UserFooter />
        </>
    )
}

export default Login