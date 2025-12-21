import React from 'react'
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa";

function Ingredients() {
    return (
        <div className='flex flex-col gap-4'>
            <p className='text-white p-2' htmlFor='ingredients'>Ingredients</p>
            <div className='relative'>
                <input type='text' className='border border-[#3b5445] rounded p-2 bg-[#1c2720] w-full text-gray-400 placeholder:text-gray-400' placeholder='Ingredient 1' />
                <ImCross className='text-sm text-[#13ec6a]/50 absolute top-3.5 right-3.5 hover:text-[#13ec6a]/30 cursor-pointer' />
            </div>
            <button className='flex justify-center gap-5 items-center bg-linear-to-r from-[#13ec6a]/50 to-[#13ec6a]/90 px-2 py-1.5 rounded text-white cursor-pointer hover:bg-[#13ac6a]/60'>
                <FaPlus/>
                <p>Add Ingredient</p>
            </button>

        </div>
    )
}

export default Ingredients