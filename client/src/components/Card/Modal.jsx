import React from 'react'
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

function Modal({ onClose, text }) {

    const navigate = useNavigate();

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

                {/* Message */}
                <p className='text-gray-300 text-center text-sm md:text-base'>
                    {text}
                </p>

                {/* Login Button */}
                <button
                    onClick={() => navigate('/login')}
                    className='bg-[#13ec6a] text-black 
                               font-semibold 
                               px-5 py-2 
                               rounded-lg 
                               hover:bg-green-400 
                               hover:scale-105 
                               active:scale-95 
                               transition-all duration-300'
                >
                    Login Now
                </button>

            </div>
        </div>
    )
}

export default Modal