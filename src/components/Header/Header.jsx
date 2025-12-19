import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdNotificationsNone } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate,Link } from 'react-router-dom';

function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    let navigate = useNavigate();
    return (
        <header className='bg-[#102217] text-white sticky top-0 left-0 z-50'>
            <nav className='px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
                <div className='flex gap-3 items-center cursor-pointer' onClick={()=>navigate('/')}>
                    <img src='/images/BrandIcons.png' alt='BrandIcon' />
                    <h1 className='text-2xl font-bold'>CookBook</h1>
                </div>
                <ul className='flex gap-4 items-center'>
                    <li className='text-[15px] cursor-pointer active:border-b' onClick={()=>navigate('/')}>Home</li>
                    <li className='flex items-center gap-2 px-5 py-1 rounded-2xl bg-[#3c4f43] text-[15px]' onClick={()=>{navigate('/recipes')}}><IoSearchSharp/><span>Search</span></li>
                </ul>

                { //Show signin and signUp button only when user is not logged in

                    !isLoggedIn ? <div className='flex gap-4 items-center'>
                        <button className='border border-[#3c4f43] py-1.5 px-2.5 rounded-md cursor-pointer hover:border-none hover:bg-[#3c4f43]'>Sign In</button>
                        <button className='py-1.5 px-2.5 bg-[#13ec6a] text-[#111814] rounded-md cursor-pointer hover:bg-[#0f9444]'>Sign Up</button>
                    </div> : <div className='flex gap-4 items-center'>
                        <Link><button className='text-2xl cursor-pointer'><MdNotificationsNone/></button></Link>
                        <Link to={'/favorites'}><button className='text-lg cursor-pointer'><FaRegHeart/></button></Link>
                        <Link><button className='text-xl bg-[#3c4f43] p-2 rounded-full text-[#13ec6a] cursor-pointer'><FaRegUser/></button></Link>
                    </div>
                }

            </nav>
        </header>
    )
}

export default Header