import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

function Steps({ setInstructions, instructions }) {
    const [instruction, setinstruction] = useState('');

    function saveStep(){
        if(!instruction.trim()) return;
        setInstructions([...instructions,instruction])
        setinstruction('');
    }

    function removeInstruction(index){
      setInstructions(instructions.filter((step,i)=>i!==index))
    }

    return (
        <div className='flex flex-col gap-4'>
            <p className='text-white p-2' htmlFor='ingredients'>Instructions</p>
            <div className='flex gap-3 items-center'>
                <textarea className='border border-[#3b5445] rounded p-2 bg-[#1c2720] w-full text-gray-400 placeholder:text-gray-400' placeholder='Type Instruction...' 
                value={instruction} onChange={(e)=>setinstruction(e.target.value)}/>
            </div>
            {
                instructions.map((instruction,index) => {
                    return (
                        <div className='flex gap-3 items-center' key={index}>
                            <textarea className='border border-[#3b5445] rounded p-2 bg-[#1c2720] w-full text-gray-400 placeholder:text-gray-400' readOnly value={instruction} />
                            <ImCross className='text-sm text-[#13ec6a]/50  cursor-pointer hover:text-[#13ec6a]/30' 
                            onClick={()=>removeInstruction(index)}/>
                        </div>

                    )
                })
            }

            <button className='flex justify-center gap-5 items-center  bg-linear-to-r from-[#13ec6a]/50 to-[#13ec6a]/90 px-2 py-1.5 rounded text-white cursor-pointer hover:bg-[#13ac6a]/60'
            onClick={saveStep}>
                <FaPlus />
                <p>Add Step</p>
            </button>

        </div>
    )
}

export default Steps