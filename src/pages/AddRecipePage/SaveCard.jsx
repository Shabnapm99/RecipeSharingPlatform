import React from 'react'
import { ImCross } from "react-icons/im";
import { FaPrint } from "react-icons/fa6";

function SaveCard() {
    return (
        <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217] text-white/90 flex flex-col gap-3'>
            <button className='border rounded-lg text-sm py-1 border-[#3b5445] flex items-center justify-center gap-4 bg-[#13ec6a]/60'>
                <FaPrint />
                <p>Publish Recipe</p>
            </button>
            <button className='border rounded-lg text-sm py-1 border-[#3b5445] flex items-center justify-center gap-4 hover:bg-[#13ec6a]/30'>
                <FaPrint />
                <p>Save as Draft</p>
            </button>
            <button className='border rounded-lg text-sm py-1 border-[#3b5445] flex items-center justify-center gap-4 bg-[#1c2720]'>
                <ImCross className='' />
                <p>Clear</p>
            </button>

        </div>
    )
}

export default SaveCard