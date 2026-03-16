import React from 'react'
import { ImCross } from "react-icons/im";
import { FaHeart } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../../axios/axiosInstance';
import { setAuthUser, setIsLoggedIn } from '../../features/userSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';


function ProfileModal({ onClose }) {

    let authUser = useSelector((state) => state.users.authUser);
    const savedRecipes = useSelector((state) => state.favorites.savedRecipes);
    const [userAddedRecipes, setUserAddedRecipes] = useState([]);

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const handleLogout = async () => {
        let response = await axiosInstance.post('/logout');
        if (response.status === 200) {
            console.log("user loggedout successfully")
            dispatch(setIsLoggedIn(false));
            dispatch(setAuthUser(null));
            // onClose();
            toast.success("Logged out successfully");
            navigate('/login')

        }
    }

    useEffect(() => {
        const getUserAddedRecipes = async () => {
            try {
                let response = await axiosInstance.get('/recipes/my-recipes');
                console.log(response)
                setUserAddedRecipes(response.data.recipes);

            } catch (error) {
                console.log(error)
                toast.error("Something went wrong");
            }

        };
        getUserAddedRecipes();
    }, [])

    return (
        <div className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center animate-fadeIn'>

            <div className='relative w-[90%] sm:w-[70%] md:w-[40%] rounded-3xl bg-[#1c2720] py-8 px-6 shadow-2xl transform transition-all duration-300 scale-100 animate-scaleIn'>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className='absolute right-5 top-4 text-gray-400 text-xs cursor-pointer hover:text-green-400 transition duration-200'
                >
                    <ImCross />
                </button>

                <div className='flex flex-col justify-center items-center gap-6'>

                    <MdAccountCircle className='text-7xl text-green-400' />

                    {/* Account Details */}
                    <div className='flex flex-col items-center gap-1'>
                        <h2 className='text-lg font-semibold text-white'>{authUser?.name}</h2>
                        <p className='text-gray-400 text-sm'>{authUser?.email}</p>

                        <div className='mt-2 border border-green-500 rounded-full bg-green-500/20 px-3 py-1 text-green-400 text-xs font-medium'>
                            {authUser?.occupation}
                        </div>
                    </div>

                    {/* Favorites & Added Recipes */}
                    <div className='flex gap-4 w-full justify-center'>

                        <div className='border border-[#13ec6a]/30 bg-green-950 rounded-xl p-4 cursor-pointer hover:scale-105 hover:bg-green-900 transition-all duration-300'
                            onClick={() => {
                                navigate('/favorites');
                                onClose();
                            }}>
                            <div className='flex items-center gap-2'>
                                <FaHeart className='text-[#13ec6a]' />
                                <p className='text-gray-400 text-sm'>Favorites</p>
                            </div>
                            <p className='font-semibold text-white mt-1'>{savedRecipes.length} Recipes</p>
                        </div>

                        <div className='border border-[#13ec6a]/30 bg-green-950 rounded-xl p-4 cursor-pointer hover:scale-105 hover:bg-green-900 transition-all duration-300'
                            onClick={() => {
                                navigate('/added-recipes');
                                onClose();
                            }}>
                            <div className='flex items-center gap-2'>
                                <img src='/favicon.ico' alt="icon" className="w-4 h-4" />
                                <p className='text-gray-400 text-sm'>Added</p>

                            </div>
                            <p className='font-semibold text-white mt-1'>{userAddedRecipes?.length || 0} recipes</p>
                        </div>

                    </div>

                    {/* Logout Button */}
                    <div className='flex gap-2 items-center bg-[#13ec6a] text-black rounded-lg px-4 py-2 cursor-pointer 
                                    hover:bg-green-400 hover:shadow-lg hover:scale-105 
                                    active:scale-95 transition-all duration-300'
                        onClick={handleLogout}>
                        <FiLogOut />
                        <p className='text-sm font-bold'>Logout</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileModal