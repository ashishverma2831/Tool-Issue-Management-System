import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { Link } from 'react-router-dom'
import UserFooter from '../components/UserFooter';

const ViewIssues = () => {

    const [issueList, setIssueList] = useState([]);
    const fetchIssueList = async () => {
        try {
            const res = await fetch('http://localhost:3000/user/get-issues');
            const data = await res.json();
            setIssueList(data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(issueList);
    useEffect(() => {
        fetchIssueList();
    }, [])

    const deleteIssue = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/user/delete-issue/${id}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            console.log(data);
            fetchIssueList();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <AdminNavbar />
            <p className="text-center font-extrabold text-3xl my-10">Issues</p>
            <div className=" max-w-screen-xl mx-auto my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Issue
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Delete issue
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            issueList.map((issue) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
                                        <td className="px-6 py-4 capitalize text-center">{issue.name}</td>
                                        <td className="px-6 py-4 capitalize text-center">{issue.email}</td>
                                        <td className="px-6 py-4 text-center">{issue.issue}</td>
                                        <td className="px-6 py-4 text-center">
                                            <Link className='mx-2 ' onClick={() => { deleteIssue(issue._id) }}><i className="fa-solid fa-trash text-red-700"></i></Link>
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

export default ViewIssues