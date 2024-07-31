import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'


const registerSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobile: Yup.string().required('Mobile number is required').min(10, 'Mobile number must be 10 digits').max(10, 'Mobile number must be 10 digits'),
    password: Yup.string().required('Password is required').min(8, 'Password must be atleast 8 characters')
    // .matches(/[a-zA-Z]\d/, 'password must include uppercase and lowercase letter')
})

const Signup = () => {


    const navigate = useNavigate();
    const [passwordHidden, setPasswordHidden] = useState(true);
    const registerForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            password: '',
            selectedRole: ''
        },
        onSubmit: async (values,{setSubmitting,resetForm}) => {
            console.log(values)
            setSubmitting(true);
            const response = await fetch('http://localhost:3000/user/created', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            //    mode:'no-cors',
                body: JSON.stringify(values)
            })
            console.log(response.status);
            setSubmitting(false);

            if(response.status === 200){
                enqueueSnackbar('Registration Successful',{variant:'success'})
                resetForm();
                navigate('/login');
            }
            else{
                enqueueSnackbar('Registration Failed',{variant:'error'})
            }
        },
        validationSchema: registerSchema
    })

    return (
        <>
            <section className='w-full py-10 mx-auto bg-red-500 flex justify-center items-center'>
                <div className='my-8 flex flex-col gap-4 bg-blue-200 max-w-screen-xl p-10 shadow-xl rounded'>
                    <h1 className='text-3xl font-bold text-center'>Registration</h1>
                    <form className='w-[360px]' onSubmit={registerForm.handleSubmit}>
                        <div className='w-full flex flex-col gap-1 mb-4'>
                            <label htmlFor='name'>Name</label>
                            <input id='name'
                                placeholder='Enter your name'
                                onChange={registerForm.handleChange}
                                value={registerForm.values.name}
                                className='p-2 outline-none border-none rounded' type='text' />
                            <span className='text-sm text-red-600'>{registerForm.touched.name && registerForm.errors.name}</span>
                        </div>
                        <div className='w-full flex flex-col gap-1  mb-4'>
                            <label htmlFor='email'>Email</label>
                            <input
                                placeholder='Enter your email'
                                id='email'
                                onChange={registerForm.handleChange}
                                value={registerForm.values.email}
                                className='p-2 outline-none border-none rounded' type='email' />
                            <span className='text-sm text-red-600'>{registerForm.touched.email && registerForm.errors.email}</span>
                        </div>
                        <div className='w-full flex flex-col gap-1  mb-4'>
                            <label>Mobile Number</label>
                            <input
                                id='mobile'
                                placeholder='Enter your mobile number'
                                onChange={registerForm.handleChange}
                                value={registerForm.values.mobile}
                                className='p-2 outline-none border-none rounded' type='number' minLength={10} maxLength={10} />
                            <span className='text-sm text-red-600'>{registerForm.touched.mobile && registerForm.errors.mobile}</span>
                        </div>
                        <div className='w-full flex flex-col gap-1  mb-4'>
                            <label htmlFor='selectedRole'>Level of Mechanic</label>
                            <select id='selectedRole' onChange={registerForm.handleChange} value={registerForm.values.selectedRole} className='p-2 outline-none border-none rounded'>
                                <option value=''>Level of Mechanic</option>
                                <option value='expert'>Expert</option>
                                <option value='medium'>Medium</option>
                                <option value='recruit'>New Recruit</option>
                                <option value='trainee'>Trainee</option>
                            </select>
                            <span className='text-sm text-red-600'>{registerForm.touched.selectedRole && registerForm.errors.selectedRole}</span>
                        </div>
                        <div className='w-full flex flex-col gap-1  mb-8'>
                            <label htmlFor='password'>Password</label>
                            {/* <input 
                    id='password'
                    type={passwordHidden?'password':'text'}
                    onChange={registerForm.handleChange}
                    value={registerForm.values.password}
                    className='p-2 outline-none border-none rounded' /> */}
                            <div className='relative flex'>
                                <input
                                    type={passwordHidden ? 'password' : 'text'}
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className='p-2 w-full outline-none border-none rounded '
                                    onChange={registerForm.handleChange}
                                    value={registerForm.values.password}
                                />
                                <button type='button' className='absolute top-2 right-2' onClick={() => { setPasswordHidden(!passwordHidden) }}>{passwordHidden ? <i className="fa-solid fa-eye"></i> : <i className="fa-regular fa-eye"></i>}</button>
                            </div>
                            <span className='text-sm text-red-600'>{registerForm.touched.password && registerForm.errors.password}</span>
                        </div>
                        {/* <div className='w-full flex flex-col gap-1'>
                    <label>Picture</label>
                    <input type='file' />
                </div> */}
                        <div className='w-full flex mt-4'>
                            <button className='text-center shadow-xl w-full bg-red-600  py-3 rounded hover:bg-red-400 text-white text-xl ' type='submit'>Register</button>
                        </div>
                    </form>
                    <p>Already Registered...? <Link className='text-purple-900' to={'/login'}>click here to login</Link></p>
                </div>
            </section>
        </>
    )
}

export default Signup