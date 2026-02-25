import React, { useState } from 'react'
import { LuFacebook, LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube, FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Card/Modal';
import { useSelector } from 'react-redux';

function Footer() {
    const [showModal,setShowModal] = useState(false);
    const isLoggedIn = useSelector((state)=>state.users.isLoggedIn);
    let navigate = useNavigate();
    return (
        <footer className='bg-[#102217] text-gray-400 text-sm py-6 px-4 sm:px-6 lg:px-8'>
            {/* About cookBook and social media icons */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:justify-items-center'>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'>
                        <img src='/images/BrandIcons.png' alt='Brand icon' />
                        <p className='text-white text:lg md:text-xl font-semibold'>CookBook</p>
                    </div>
                    <p className='leading-relaxed'>Discover and share amazing recipes from around the world. Join our community of passionate food lovers.</p>
                    {/* social media icons */}
                    <div className='flex gap-2'>
                        <button className='p-2 bg-[#3c4f43] rounded-lg hover:bg-[#13ec6a] cursor-pointer text-lg text-white'><a href='https://www.facebook.com/' target='_blank'><LuFacebook /></a></button>
                        <button className='p-2 bg-[#3c4f43] rounded-lg hover:bg-[#13ec6a] cursor-pointer text-lg text-white'><a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank'><FaInstagram /></a></button>
                        <button className='p-2 bg-[#3c4f43] rounded-lg hover:bg-[#13ec6a] cursor-pointer text-lg text-white'><a href='https://x.com/' target='_blank'><LuTwitter /></a></button>
                        <button className='p-2 bg-[#3c4f43] rounded-lg hover:bg-[#13ec6a] cursor-pointer text-lg text-white'><a href='https://www.youtube.com/?themeRefresh=1' target='_blank'><FiYoutube /></a></button>
                    </div>
                </div>
                {/* Quick Links */}
                <div>
                    <h3 className='text-lg text-[#13ec6a] font-semibold mb-2'>Quick Links</h3>
                    <ul>
                        <Link to={'/recipes'}><li className='hover:text-white py-1 cursor-pointer'>Search recipes</li></Link>
                        <li className='hover:text-white py-1 cursor-pointer' onClick={()=>isLoggedIn?navigate('/add'):setShowModal(true)}>Add Recipe</li>
                        <Link><li className='hover:text-white py-1 cursor-pointer'>Popular Recipe</li></Link>
                        <li className='hover:text-white py-1 cursor-pointer'>Top Chefs</li>
                        <li className='hover:text-white py-1 cursor-pointer'>Cooking Blog</li>
                    </ul>
                    {showModal && <Modal onClose={() => setShowModal(false)} text='Login required to share Recipe' />}
                </div>
                {/* Categories section */}
                <div>
                    <h3 className='text-lg text-[#13ec6a] font-semibold mb-2'>Categoris</h3>
                    <ul>
                        <li className='hover:text-white py-1'>Italian cuisine</li>
                        <li className='hover:text-white py-1'>Vegetarian Dishes</li>
                        <li className='hover:text-white py-1'> Homemade Desserts</li>
                        <li className='hover:text-white py-1'>Quick Meals</li>
                        <li className='hover:text-white py-1'>Healthy Cooking</li>
                    </ul>
                </div>
                {/* Contacts section */}
                <div>
                    <h3 className='text-lg text-[#13ec6a] font-semibold mb-3'>Contact</h3>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <div className='flex gap-3 items-center'>
                                <div className='text-lg text-[#13ec6a]'><FiMail /></div>
                                <p>info@cookbook.com</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex gap-3 items-center'>
                                <div className='text-lg text-[#13ec6a]'><IoCallOutline /></div>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex gap-3 items-center'>
                                <div className='text-lg text-[#13ec6a]'><GrLocation /></div>
                                <p>San Francisco, CA</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            {/* Copyright div */}
            <div className='border-t border-gray-600 mt-12 pt-8 flex justify-between'>
                <p className=''>&copy; 2025 CookBook | All rights reserved</p>
                <div className='flex gap-4'>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Cookies</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer