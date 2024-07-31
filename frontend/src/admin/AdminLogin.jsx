import React from 'react'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

  const navigate = useNavigate();
  const adminLoginForm = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    onSubmit: values => {
      console.log(values)
      const {email, password} = values;
      // console.log(email, password);
      if(email==='admin@gmail.com' && password==='admin'){
          navigate('/admin-home');
          enqueueSnackbar('Admin Login in successfully', { variant: 'success' })
      }
      else{
          // alert('Invalid Credentials');
          enqueueSnackbar('Invalid Credentials', { variant: 'error' })
      }
  }
})

  return (
    <>
      <section className='w-full h-screen mx-auto bg-red-500 flex justify-center items-center'>
            <div className=' flex flex-col gap-4 bg-blue-200 max-w-screen-xl p-10 shadow-xl rounded'>
            <h1 className='text-3xl font-bold text-center'>Login</h1>
            <form className='w-[360px]' onSubmit={adminLoginForm.handleSubmit}>
                <div className='w-full flex flex-col gap-1 mb-4'>
                    <label htmlFor='email'>Email</label>
                    <input onChange={adminLoginForm.handleChange} value={adminLoginForm.values.email} className='p-2 outline-none border-none rounded' type='email' id='email' />
                </div>
                <div className='w-full flex flex-col gap-1  mb-8'>
                    <label htmlFor='password'>Password</label>
                    <input onChange={adminLoginForm.handleChange} value={adminLoginForm.values.password} className='p-2 outline-none border-none rounded' type='password' id='password' />
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

export default AdminLogin