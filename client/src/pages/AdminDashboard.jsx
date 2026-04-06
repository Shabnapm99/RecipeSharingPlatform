import React from 'react'
import { useEffect } from 'react'
import { getUsers } from '../services/userServices.js'
import { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminHeader from '../components/AdminHeader.jsx';
import UsersTable from '../components/UsersTable.jsx';
import AnalyticsCard from '../components/Card/AnalyticsCard.jsx';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthAdmin } from '../features/userSlice.js';
import { getRecipes } from '../services/recipeServices.js'
import { setRecipes } from '../features/recipeSlice.js';


function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [searchContent, setSearchContent] = useState('');
    // const [recipes,setRecipes] = useState([]);
    let dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes.recipes);

    const filteredUsers = users.filter(user =>
        user.name?.toLowerCase().includes(searchContent.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchContent.toLowerCase())
    );


    const fetchRecipes = async () => {

        try {

            //from mongodb

            let response = await getRecipes();
            if (response.status === 200) {
                console.log("Recipes array:", response.data.recipes);
                dispatch(setRecipes(response.data.recipes));

            }

        } catch (error) {
            console.error(`Error occured : ${error.message}`);
        }

    }

    useEffect(() => {
        const getAllUsers = async () => {
            console.log("Recipes:", recipes);
            try {
                let response = await getUsers();
                setUsers(response?.data?.users);
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong while fetching users");
            }
        };
        getAllUsers();
        fetchRecipes();
    }, []);



    return (
        <div className="bg-[#1c2720] min-h-screen flex gap-4 p-6 text-gray-100">

            {/* Sidebar */}
            <div className="w-64 hidden md:block">
                <AdminSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col space-y-6">

                {/* Header */}
                <div className="bg-[#24332b] shadow rounded-2xl p-4 text-gray-100">
                    <AdminHeader searchContent={searchContent} setSearchContent={setSearchContent} />
                </div>


                {/* Users Table */}
                <div className="bg-[#24332b] text-gray-100 shadow-md rounded-2xl p-4">
                    <UsersTable users={filteredUsers} setUsers={setUsers} />
                </div>


                {/* Analytics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-[#24332b] text-gray-100 shadow-md rounded-2xl p-5">
                        <AnalyticsCard title="New Users Joined" value={users?.length || 0} />
                    </div>

                    <div className="bg-[#24332b] text-gray-100 shadow-md rounded-2xl p-5">
                        <AnalyticsCard title="Active Users" value={users?.length || 0} />
                    </div>

                    <div className="bg-[#24332b] text-gray-100 shadow-md rounded-2xl p-5">
                        <AnalyticsCard title="Total Recipes" value={recipes?.length || 0} />
                    </div>

                </div>

            </div>
        </div>
    );
}
export default AdminDashboard