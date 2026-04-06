import React, { useState } from 'react'
import { axiosInstance } from '../axios/axiosInstance';

function UsersTable({ users, setUsers }) {

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    // Pagination Logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(users.length / usersPerPage);

    const handleDisableButton = (user) => {
        updateStatus(user);
    }

    const updateStatus = async (user) => {
        try {
            let newStatus = user.status === "active" ? "disabled" : "active";

            await axiosInstance.put(`/admin/users/${user._id}/status`, { status: newStatus });

            setUsers(prev =>
                prev.map(u =>
                    u._id === user._id
                        ? { ...u, status: newStatus }
                        : u
                )
            );

        } catch (error) {
            console.log("Error updating status", error);
        }
    }

    return (
        <div>
            {/* Title */}
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-100">Manage Users</h2>
                <p className="text-gray-400 text-sm">
                    {users.length} users in the system
                </p>
            </div>

            {/* Table */}
            <div className="bg-[#0a2a18] rounded-2xl p-4">

                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-150">
                        <thead className="text-gray-400 text-sm border-b border-gray-700">
                            <tr>
                                <th className="py-3">User</th>
                                <th>Email</th>
                                <th>Occupation</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody className='text-sm'>
                            {currentUsers.map((user) => (
                                <tr key={user._id} className="border-b border-gray-800 hover:bg-[#0f3a24] transition">

                                    <td className="py-4 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                            {user?.name?.charAt(0)}
                                        </div>
                                        <p className="text-gray-100">{user?.name}</p>
                                    </td>

                                    <td className="text-gray-300">{user?.email}</td>

                                    <td>{user?.occupation}
                                    </td>

                                    <td>
                                        <span
                                            className={`text-xs px-3 py-1 rounded-full border 
                                            ${user?.status === "active"
                                                    ? "text-green-400 bg-green-800/30 border-green-500"
                                                    : "text-red-400 bg-red-800/30 border-red-500"
                                                }`}
                                        >
                                            {user?.status}
                                        </span>
                                    </td>

                                    <td>
                                        <button
                                            onClick={() => handleDisableButton(user)}
                                            className={`text-xs px-3 py-1 rounded-lg border transition 
                                            ${user?.status === "active"
                                                    ? "border-red-500 text-red-400 hover:bg-red-500 hover:text-black"
                                                    : "border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                                                }`}
                                        >
                                            {user?.status === "active" ? "Disable" : "Activate"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-end mt-4 gap-2">

                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        className="px-3 py-1 bg-[#123c27] rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 rounded ${currentPage === i + 1
                                    ? "bg-green-500 text-black"
                                    : "bg-[#123c27]"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="px-3 py-1 bg-[#123c27] rounded disabled:opacity-50"
                    >
                        Next
                    </button>

                </div>
            </div>
        </div>
    )
}

export default UsersTable