import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'
import UserFooter from '../components/UserFooter'
import UserNavbar from '../components/UserNavbar'


const toolSchema = Yup.object().shape({
    toolName: Yup.string().required('Tool Name is required'),
    toolDescription: Yup.string().required('Tool Description is required'),
    quantity: Yup.number().required('Quantity is required').min(1, 'Quantity must be atleast 1')
})
const UserAddTool = () => {

    const [selFile, setSelFile] = useState('');
    const addTool = useFormik({
        initialValues: {
            toolName: '',
            toolDescription: '',
            quantity: '',
            image: ''
        },
        onSubmit: async (values) => {
            values.image = selFile;
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

            if (response.status === 200) {
                enqueueSnackbar('Tool Added Successfully', { variant: 'success' })
            }
            else {
                enqueueSnackbar('Failed to Add Tool', { variant: 'error' })
            }
        },
        validationSchema: toolSchema
    })

    const uploadFile = async (e) => {
        const file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        await fetch('http://localhost:3000/util/uploadfile', {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
            }
        });
    };


    return (
        <>
            <UserNavbar />
            <section className='w-full py-10 mx-auto bg-blue-500/50 flex justify-center items-center'>
                <div className='my-8 flex flex-col gap-4 bg-blue-200 max-w-screen-xl p-10 shadow-xl rounded'>
                    <h1 className='text-3xl font-bold text-center'>Add Tools</h1>
                    <form onSubmit={addTool.handleSubmit}>
                        <div className='w-full flex flex-col gap-1 mb-4'>
                            <label>Tool Name</label>
                            <input placeholder='Enter Tool name' id='toolName' onChange={addTool.handleChange} value={addTool.values.toolName} className='p-2 outline-none border-none rounded' type='text' />
                            <span className='text-sm text-red-600'>{addTool.touched.toolName && addTool.errors.toolName}</span>
                        </div>
                        <div className='w-full flex flex-col gap-1 mb-4'>
                            <label>Tool Description</label>
                            <textarea rows={4} placeholder='Tool description here' id='toolDescription' onChange={addTool.handleChange} value={addTool.values.toolDescription} className='p-2 outline-none border-none rounded'></textarea>
                            <span className='text-sm text-red-600'>{addTool.touched.toolDescription && addTool.errors.toolDescription}</span>
                        </div>
                        {/* <div className='w-full flex flex-col gap-1 mb-4'>
                        <label>Tool Image</label>
                        <input id='toolImage' onChange={addTool.handleChange} value={addTool.values.toolImage}  className='p-2 outline-none border-none rounded' type='file' />
                        <span className='text-sm text-red-600'>{addTool.touched.toolImage && addTool.errors.toolImage}</span>
                    </div> */}
                        <div className='w-full flex flex-col gap-1 mb-4'>
                            <label htmlFor='image'>Picture</label>
                            <input id='image' onChange={uploadFile} className='p-2 w-full bg-white outline-none border-none rounded ' type='file' />
                        </div>
                        <div className='w-full flex flex-col gap-1 mb-4'>
                            <label>Quantity</label>
                            <input placeholder='Enter the quantity of the tool ' id='quantity' onChange={addTool.handleChange} value={addTool.values.quantity} className='p-2 outline-none border-none rounded' type='number' />
                            <span className='text-sm text-red-600'>{addTool.touched.quantity && addTool.errors.quantity}</span>
                        </div>
                        <button className='text-center shadow-xl w-full bg-gray-800  py-3 rounded hover:bg-gray-600 text-white text-xl ' type='submit'>Add Tool</button>
                    </form>
                </div>
            </section>
            <UserFooter />
        </>
    )
}

export default UserAddTool