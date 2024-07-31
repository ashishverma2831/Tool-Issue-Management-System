import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'
import AdminNavbar from './AdminNavbar'


const toolSchema = Yup.object().shape({
    toolName: Yup.string().required('Tool Name is required'),
    toolDescription: Yup.string().required('Tool Description is required'),
    toolImage: Yup.string().required('Tool Image is required'),
    quantity: Yup.number().required('Quantity is required').min(1, 'Quantity must be atleast 1')
})
const AddTool = () => {

    const addTool = useFormik({
        initialValues: {
            toolName: '',
            toolDescription: '',
            toolImage: '',
            quantity: ''
        },
        onSubmit: async (values) => {
            console.log(values);
            const response = await fetch('http://localhost:3000/tool/tool-added', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            const data = await response.json()
            console.log(data);

            if(response.status===200){
                enqueueSnackbar('Tool Added Successfully',{variant:'success'})
            }
            else{
                enqueueSnackbar('Failed to Add Tool',{variant:'error'})
            }
        },
        validationSchema: toolSchema
    })

  return (
    <>
        <AdminNavbar />
        <section className='w-full py-10 mx-auto bg-red-500 flex justify-center items-center'>
            <div className='my-8 flex flex-col gap-4 bg-blue-200 max-w-screen-xl p-10 shadow-xl rounded'>
                <h1 className='text-3xl font-bold text-center'>Add Tools</h1>
                <form onSubmit={addTool.handleSubmit}>
                    <div className='w-full flex flex-col gap-1 mb-4'>
                        <label>Tool Name</label>
                        <input id='toolName' onChange={addTool.handleChange} value={addTool.values.toolName}  className='p-2 outline-none border-none rounded' type='text' />
                        <span className='text-sm text-red-600'>{addTool.touched.toolName && addTool.errors.toolName}</span>
                    </div>
                    <div className='w-full flex flex-col gap-1 mb-4'>
                        <label>Tool Description</label>
                        <textarea id='toolDescription' onChange={addTool.handleChange} value={addTool.values.toolDescription}  className='p-2 outline-none border-none rounded'></textarea>
                        <span className='text-sm text-red-600'>{addTool.touched.toolDescription && addTool.errors.toolDescription}</span>
                    </div>
                    <div className='w-full flex flex-col gap-1 mb-4'>
                        <label>Tool Image</label>
                        <input id='toolImage' onChange={addTool.handleChange} value={addTool.values.toolImage}  className='p-2 outline-none border-none rounded' type='file' />
                        <span className='text-sm text-red-600'>{addTool.touched.toolImage && addTool.errors.toolImage}</span>
                    </div>
                    <div className='w-full flex flex-col gap-1 mb-4'>
                        <label>Quantity</label>
                        <input id='quantity' onChange={addTool.handleChange} value={addTool.values.quantity}  className='p-2 outline-none border-none rounded' type='number' />
                        <span className='text-sm text-red-600'>{addTool.touched.quantity && addTool.errors.quantity}</span>
                    </div>
                    <button className='text-center shadow-xl w-full bg-red-600  py-3 rounded hover:bg-red-400 text-white text-xl ' type='submit'>Add Tool</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default AddTool