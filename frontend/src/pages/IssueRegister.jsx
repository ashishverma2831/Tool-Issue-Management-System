import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const issueSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    issue: Yup.string().required('Issue is required')
})

const IssueRegister = () => {

    const registerIssue = useFormik({
        initialValues: {
            name: '',
            email: '',
            issue: ''
        },
        onSubmit: async (values) => {
            console.log(values)
        },
        validationSchema:issueSchema
    })

    return (
        <>
            <section className='w-full h-screen mx-auto bg-red-500 flex justify-center items-center'>
                <div className=' flex flex-col gap-4 bg-blue-200 max-w-screen-xl p-10 shadow-xl rounded'>
                    <h1 className='text-3xl font-bold text-center'>Send Your Issues here</h1>
                    <form className='w-[360px]' onSubmit={registerIssue.handleSubmit}>
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
                            <button className='shadow-xl text-center w-full bg-red-600  py-3 rounded hover:bg-red-400 text-white text-xl ' type='submit'>Register</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default IssueRegister