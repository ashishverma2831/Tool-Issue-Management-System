import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack';
import useAppContext from '../AppContext'

const Login = () => {

    const {currentUser,setCurrentUser,loggedIn,setLoggedIn,logout} = useAppContext();
    const navigate = useNavigate();
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
                // mode:'no-cors',
                body: JSON.stringify(values)
            })

            if (res.status === 200) {
                enqueueSnackbar('Login in successfully', { variant: 'success' })
                const data = await res.json();
                sessionStorage.setItem('user', JSON.stringify(data))
                setLoggedIn(true);
                navigate('/home');
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
            <section className='w-full h-screen mx-auto bg-red-500 flex justify-center items-center'>
                <div className=' flex flex-col gap-4 bg-blue-200 max-w-screen-xl p-10 shadow-xl rounded'>
                    <h1 className='text-3xl font-bold text-center'>Login</h1>
                    <form className='w-[360px]' onSubmit={loginForm.handleSubmit}>
                        <div className='w-full flex flex-col gap-1 mb-4'>
                            <label htmlFor='name'>Name</label>
                            <input onChange={loginForm.handleChange} value={loginForm.values.name} className='p-2 outline-none border-none rounded' type='text' id='name' />
                        </div>
                        <div className='w-full flex flex-col gap-1  mb-8'>
                            <label htmlFor='password'>Password</label>
                            <input onChange={loginForm.handleChange} value={loginForm.values.password} className='p-2 outline-none border-none rounded' type='password' id='password' />
                        </div>
                        {/* <div className='w-full flex flex-col gap-1'>
                    <label>Picture</label>
                    <input type='file' />
                </div> */}
                        <div className='w-full flex mt-4'>
                            <button className='shadow-xl text-center w-full bg-red-600  py-3 rounded hover:bg-red-400 text-white text-xl ' type='submit'>Register</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login