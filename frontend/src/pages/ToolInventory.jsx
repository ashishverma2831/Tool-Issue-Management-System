import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserFooter from '../components/UserFooter';
import UserNavbar from '../components/UserNavbar';

const ToolInventory = () => {

    const [toolList, setToolList] = useState([]);
    const fetchToolList = async () => {
        try {
            const res = await fetch('http://localhost:3000/tool/all');
            const data = await res.json();
            setToolList(data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(toolList);
    useEffect(() => {
        fetchToolList();
    }, [])

    const deleteTool = async (id) => {
        try {
            const res = await fetch('http://localhost:3000/tool/delete/' + id, {
                method: 'DELETE'
            });
            if (res.status === 200) {
                fetchToolList();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <UserNavbar />
            <p className="text-center font-extrabold text-3xl my-10">Tool List</p>
            <div className=" max-w-screen-xl mx-auto my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Tool Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Tool Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Tool Image
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Delete Tool
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toolList.map((tool) => {
                                return (
                                    <tr className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 capitalize text-center">{tool.toolName}</td>
                                        <td className="px-6 py-4 capitalize text-center">{tool.toolDescription}</td>
                                        <td className="px-6 py-4 text-center"><img className='w-full h-[200px]' alt='tool-image' src={'http://localhost:3000/uploads/' + tool.image} /> </td>
                                        <td className="px-6 py-4 text-center">{tool.quantity}</td>
                                        <td className="px-6 py-4 text-center">
                                            <Link className='mx-2 ' onClick={() => { deleteTool(tool._id) }}><i className="fa-solid fa-trash text-red-700"></i></Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <UserFooter />
        </>
    )
}

export default ToolInventory