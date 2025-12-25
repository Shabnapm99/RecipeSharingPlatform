import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdNotificationsNone } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate, Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
function Header() {

    const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
    const favoriteCount = useSelector((state)=>state.favorites.favoriteCount);
    let navigate = useNavigate();
    return (
        <header className='bg-[#102217] text-white sticky top-0 left-0 z-50'>
            <div>

                <nav className='px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
                    <div className='flex gap-3 items-center cursor-pointer' onClick={() => navigate('/')}>
                        <img src='/images/BrandIcons.png' alt='BrandIcon' />
                        <span className='text-xl md:text-2xl font-bold'>CookBook</span>
                    </div>
                    <ul className='hidden md:flex gap-4 items-center'>
                        <li className='text-[15px] cursor-pointer active:border-b hover:text-[#13ec6a]' onClick={() => navigate('/')}>Home</li>
                        <li className='flex items-center gap-2 px-5 py-1 rounded-2xl bg-[#3c4f43] text-[15px] hover:text-[#13ec6a]' onClick={() => { navigate('/recipes') }}><IoSearchSharp /><span>Search</span></li>
                    </ul>

                    { //Show signin and signUp button only when user is not logged in

                        !isLoggedIn ? <div className='flex gap-4 items-center'>
                            <Link to={'/login'}><button className='border border-[#3c4f43] py-1.5 px-2.5 rounded-md cursor-pointer hover:border-none hover:bg-[#3c4f43]'>Sign In</button></Link>
                            <Link to={'/signup'}><button className='py-1.5 px-2.5 bg-[#13ec6a] text-[#111814] rounded-md cursor-pointer hover:bg-[#0f9444]'>Sign Up</button></Link>
                        </div> : <div className='flex gap-4 items-center'>
                            <Link><button className='text-3xl cursor-pointer hidden md:block'><MdNotificationsNone /></button></Link>
                            <Link to={'/favorites'}>
                                <div className='relative'>
                                    <button className='text-2xl cursor-pointer'><FaRegHeart /></button>
                                    {favoriteCount&&<div className='bg-[#13ec6a] text-white text-xs w-3.5 h-3.5 rounded-full flex justify-center font-bold items-center absolute top-0 right-0 -translate-y-1 translate-x-2'>{favoriteCount}</div>}
                                </div></Link>
                            <Link><button className='text-2xl bg-[#3c4f43] p-2 rounded-full text-[#13ec6a] cursor-pointer'><FaRegUser /></button></Link>
                        </div>
                    }


                </nav>
                {/* Navigation in small screens */}
                <div className='flex md:hidden text-sm items-center justify-between px-6 py-2 text-gray-400 border-t'>
                    <div className='flex flex-col justify-center items-center' onClick={() => navigate('/')}><IoHomeOutline />Home</div>
                    <div className='flex flex-col justify-center items-center' onClick={() => { navigate('/recipes') }}><IoSearchSharp />search</div>
                    <div className='flex flex-col justify-center items-center'><MdNotificationsNone />Notification</div>

                </div>

            </div>

        </header>
    )
}

export default Header