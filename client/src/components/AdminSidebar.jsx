// import React from 'react'
// import { FaChartBar, FaCog, FaUsers, FaSignOutAlt } from 'react-icons/fa'
// import SideBarItem from './Card/SideBarItem'
// import { axiosInstance } from '../axios/axiosInstance';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// function AdminSidebar() {

//     let navigate = useNavigate();

//     const handleLogout = async (e) => {
//         e.preventDefault();

//         try {
//             await axiosInstance.post('/admin/logout');
//             toast.success("Logged out successfully");
//             navigate('/');
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response?.data?.message);
//         }
//     }

//     return (
//         <div className="w-64 h-screen flex flex-col justify-between bg-[#04150c] p-5 text-gray-100">

//             {/* Top Section */}
//             <div>
//                 {/* Logo */}
//                 <h1 className="text-2xl font-bold text-green-400 mb-8 tracking-wide" onClick={()=>navigate('/')}>
//                     CookBook
//                 </h1>

//                 {/* Admin Info */}
//                 <div className="mb-8 flex items-center gap-3 bg-[#0a2a18] p-4 rounded-xl shadow-md">
//                     <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
//                         A
//                     </div>
//                     <div>
//                         <p className="text-sm font-medium">Admin Panel</p>
//                         <p className="text-xs text-gray-400">Chef Administrator</p>
//                     </div>
//                 </div>

//                 {/* Menu */}
//                 <div className="flex flex-col gap-3">
//                     <SideBarItem text="Users" icon={<FaUsers />} active />
//                     <SideBarItem text="Analytics" icon={<FaChartBar />} />
//                     <SideBarItem text="Settings" icon={<FaCog />} />
//                 </div>
//             </div>

//             {/* Logout Button */}
//             <button 
//                 onClick={handleLogout}
//                 className="flex items-center justify-center gap-2 bg-[#0a2a18] hover:bg-[#123524] transition-colors duration-200 p-3 rounded-xl text-red-400 font-medium"
//             >
//                 <FaSignOutAlt />
//                 Sign Out
//             </button>

//         </div>
//     )
// }

// export default AdminSidebar


import React, { useState } from 'react'
import { FaChartBar, FaCog, FaUsers, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa'
import SideBarItem from './Card/SideBarItem'
import { axiosInstance } from '../axios/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminSidebar() {

    const [isOpen, setIsOpen] = useState(false);
    let navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            await axiosInstance.post('/admin/logout');
            toast.success("Logged out successfully");
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message);
        }
    }

    return (
        <>
            {/* Hamburger Button (Mobile Only) */}
            <div className="md:hidden p-4">
                <button onClick={() => setIsOpen(true)}>
                    <FaBars size={22} className='text-amber-50' />
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed top-0 left-0 h-screen w-64 bg-[#04150c] p-5 text-gray-100 z-50
                transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0 md:static md:flex
                flex flex-col justify-between
            `}>

                {/* Close Button (Mobile) */}
                <div className="md:hidden flex justify-end mb-4">
                    <button onClick={() => setIsOpen(false)}>
                        <FaTimes size={22} />
                    </button>
                </div>

                {/* Top Section */}
                <div>
                    {/* Logo */}
                    <h1 
                        className="text-2xl font-bold text-green-400 mb-8 tracking-wide cursor-pointer"
                        onClick={()=>navigate('/')}
                    >
                        CookBook
                    </h1>

                    {/* Admin Info */}
                    <div className="mb-8 flex items-center gap-3 bg-[#0a2a18] p-4 rounded-xl shadow-md">
                        <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                            A
                        </div>
                        <div>
                            <p className="text-sm font-medium">Admin Panel</p>
                            <p className="text-xs text-gray-400">Chef Administrator</p>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="flex flex-col gap-3">
                        <SideBarItem text="Users" icon={<FaUsers />} active />
                        <SideBarItem text="Analytics" icon={<FaChartBar />} />
                        <SideBarItem text="Settings" icon={<FaCog />} />
                    </div>
                </div>

                {/* Logout Button */}
                <button 
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 bg-[#0a2a18] hover:bg-[#123524] transition-colors duration-200 p-3 rounded-xl text-red-400 font-medium"
                >
                    <FaSignOutAlt />
                    Sign Out
                </button>
            </div>
        </>
    )
}

export default AdminSidebar;