import React from 'react'

function InstructionCard({instruction,index}) {
  return (
    <div className='border my-2 border-[#13ec6a]/30 bg-[#364f3f] rounded p-4 text-white'>
        <div className='flex items-center gap-5 text-sm'>
            <div className='border-2 border-[#13ec6a]/30 rounded-full px-2 flex w-8 h-8 shrink-0 justify-center items-center bg-[#1c2720]'>
                {index+1}
            </div>
            {instruction}

        </div>
        

    </div>
  )
}

export default InstructionCard