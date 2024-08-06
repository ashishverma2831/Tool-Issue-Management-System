import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import UserNavbar from '../components/UserNavbar'
import useAppContext from '../AppContext'
import UserFooter from '../components/UserFooter'

const issueSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    issue: Yup.string().required('Issue is required')
})

const IssueRegister = () => {

    const {currentUser,setCurrentUser,loggedIn,setLoggedIn,logout} = useAppContext();

    const navigate = useNavigate();
    const registerIssue = useFormik({
        initialValues: {
            name: '',
            email: '',
            issue: ''
        },
        onSubmit: async (values,{setSubmitting,resetForm}) => {
            console.log(values);
            setSubmitting(true);
            const response = await fetch('http://localhost:3000/user/register-issue',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(values)
            })

            setSubmitting(false);
            if(response.status === 200){
                enqueueSnackbar('Issue registered successfully',{variant:'success'})
                resetForm();
                navigate('/register-issue');
            }
            else{
                enqueueSnackbar('Issue registration failed',{variant:'error'})
            }
        },
        validationSchema:issueSchema
    })

    return (
        <>
            <UserNavbar />
            <section className='w-full py-10 mx-auto bg-blue-500/50 flex justify-center items-center'>
                <div className=' flex my-8 flex-col gap-4 bg-blue-200 max-w-screen-xl p-10 shadow-xl rounded'>
                    <h1 className='text-3xl font-bold text-center'>Send Your Issues here</h1>
                    <form className='w-full' onSubmit={registerIssue.handleSubmit}>
                        <div className='w-full flex flex-col gap-1 mb-4'>
                            <label htmlFor='name'>Name</label>
                            <input onChange={registerIssue.handleChange} value={registerIssue.values.name} placeholder='Enter your name' className='p-2 outline-none border-none rounded' type='text' id='name' />
                            <span className='text-red-500 text-sm'>{registerIssue.touched.name && registerIssue.errors.name}</span>
                        </div>
                        <div className='w-full flex flex-col gap-1 mb-4'>
                            <label>Email</label>
                            <input onChange={registerIssue.handleChange} value={registerIssue.values.email} placeholder='Enter your email' id='email' className='p-2 outline-none border-none rounded' type='email' />
                            <span className='text-red-500 text-sm'>{registerIssue.touched.email && registerIssue.errors.email }</span>
                        </div>
                        <div className='w-full flex flex-col gap-1 mb-4'>
                            <label>Your Issue</label>
                            <textarea onChange={registerIssue.handleChange} value={registerIssue.values.issue} placeholder='Enter your issues here...' id='issue' rows={4} className='p-2 outline-none border-none rounded'></textarea>
                            <span className='text-red-500 text-sm'>{registerIssue.touched.issue && registerIssue.errors.issue }</span>
                        </div>
                        <div className='w-full flex mt-4'>
                            <button className='shadow-xl text-center w-full bg-gray-800  py-3 rounded hover:bg-gray-600 text-white text-xl ' type='submit'>Register</button>
                        </div>
                    </form>
                </div>
            </section>
            <UserFooter />
        </>
    )
}

export default IssueRegister