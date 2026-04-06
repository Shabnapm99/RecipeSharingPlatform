import React from 'react'
import ButtonSpinner from './ButtonSpinner'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { axiosInstance } from '../../axios/axiosInstance';
import { toast } from 'react-toastify';
import { setAuthAdmin } from '../../features/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';

function AdminLogin({ onClose }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    let navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        let loginAdmin = async () => {
            try {
                let response = await axiosInstance.post('/admin/login', { email, password });
                if (response.status === 200) {
                    dispatch(setAuthAdmin(true));
                    setEmail('');
                    setPassword('');
                    toast.success("Admin LoggedIn successfully")
                    navigate('/admin/dashboard');
                }

            } catch (error) {
                console.log(error);
                toast.error(error.response?.data?.message);

            } finally {
                setLoading(false)
            }
        }
        loginAdmin();

    }
    return (
        <div className='fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn'>

            <div className='relative w-[90%] sm:w-[70%] md:w-[40%] 
                                bg-[#1c2720] rounded-3xl 
                                px-6 py-8 
                                shadow-2xl 
                                flex flex-col items-center gap-6 
                                animate-scaleIn'>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className='absolute top-4 right-5 text-gray-400 
                                   hover:text-green-400 
                                   transition duration-200'
                >
                    <ImCross />
                </button>
                <h2 className='text-xl font-bold text-white'>Admin Login</h2>

                {/* Fileds */}
                <form className='' onSubmit={handleSubmit} noValidate>
                    <div className='flex flex-col gap-5'>
                        <div className=''>
                            <label htmlFor='email' className='text-white block text-sm'>Email or UserName</label>
                            <input className='mt-2 rounded-2xl py-2.5 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm focus:ring-green-500 outline-none' type='email' id='email' required placeholder='example@gmail.com' value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className=''>
                            <label htmlFor='pswd' className='text-white block text-sm'>Password</label>
                            <div className="relative">
                                <input className='mt-2 rounded-2xl py-2.5 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm placeholder:font-extrabold placeholder:text-xl focus:ring-green-500 outline-none'
                                    type={showPassword ? "text" : "password"} id='pswd' required placeholder='.......' value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                {showPassword ? <FaRegEye className='text-white absolute top-5 right-2' onClick={() => setShowPassword(false)} /> : <FaRegEyeSlash className='text-white absolute top-5 right-2' onClick={() => setShowPassword(true)} />}

                            </div>
                        </div>
                        <div className='text-end'>
                            <a className='text-xs font-medium text-[#13ec6a]' href='#'>Forgot password?</a>
                        </div>

                        {/* Submit button */}
                        <button disabled={loading} className='rounded-2xl py-2.5 px-5  text-sm font-bold text-[#102217] bg-[#13ec6a] hover:bg-[#13ec6a]/90 relative overflow-hidden disabled:opacity-50' type='submit'>Login
                            {loading && <ButtonSpinner loading={loading} />}</button>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default AdminLogin