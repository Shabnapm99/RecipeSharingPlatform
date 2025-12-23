import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import { Navigate, useNavigate } from 'react-router-dom';

function Modal({onClose,text}) {

    let navigate = useNavigate();
     
    return (
        <>
            {/* Modal */
                <div className='fixed inset-0 bg-black/80 flex justify-center items-center z-100'>

                    <div className='w-[75%] md:w-[40%] h-[20%] lg:h-[30%] bg-white/90 rounded flex flex-col gap-4 justify-center items-center relative' >
                        <button className='absolute top-3 right-3 p-2 hover:border rounded border-gray-500 text-[#13ec6a]/90 hover:text-red-700'  onClick={onClose}><ImCross/></button>
                        <p className='pt-3 text-sm md:text-base'>{text}</p>

                        <button className='bg-[#13ec13]/90 rounded px-2 py-1 text-white' onClick={()=>navigate('/login')}>Ok</button>

                    </div>

                </div>
            }
        </>

    )
}

export default Modal