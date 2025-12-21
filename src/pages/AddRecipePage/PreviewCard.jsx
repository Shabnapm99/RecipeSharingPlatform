import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";

function PreviewCard() {
    return (
        <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217] text-white/90 flex flex-col gap-3 sticky top-16 right-0'>
            <div className='flex gap-3 items-center font-semibold'>
                <MdOutlineRemoveRedEye/>
                <h3>Preview</h3>
                
            </div>
            <div>
                <h2 className='font-semibold'>Recipe title</h2>
                <p className=''>description</p>
            </div>
            <div className='flex gap-4'>
                <p>time</p>
                <p>difficulty</p>
            </div>

        </div>
    )
}

export default PreviewCard