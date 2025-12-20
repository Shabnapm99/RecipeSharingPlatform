import React from 'react'
import { LuFilter } from "react-icons/lu";

function FilterComponent() {
    return (
        <div className=' text-white bg-[#364f3f] rounded p-3 flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-2'>
                    <LuFilter />
                    <h3>Filters</h3>
                </div>
                <LuFilter className='text-sm md:hidden' />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2 text-sm'>
                    <label htmlFor='cuisine'>Cuisine</label>
                    <select className='bg-[#1c2720] block p-1.5 rounded'>
                        <option selected>All cuisines</option>
                        <option>Italian</option>
                        <option>American</option>
                        <option>Asian</option>
                        <option>Mexican</option>
                        <option>Mexican</option>
                        <option>Mediterranean</option>
                        <option>Pakistani</option>
                        <option>Japanese</option>
                        <option>Moroccan</option>
                        <option>Greek</option>
                        <option>Korean</option>
                        <option>Thai</option>
                        <option>Indian</option>
                        <option>Turkish</option>
                        <option>Russian</option>
                        <option>Lebanese</option>
                        <option>Brazilian</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2 text-sm'>
                    <p>Difficulty</p>
                    <div className='flex gap-2 items-center'>
                        <input type='radio' name='difficulty' id='easy' />
                        <label htmlFor='easy'>Easy(under 30 mins)</label>

                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type='radio' name='difficulty' id='medium' />
                        <label htmlFor='medium'>Medium</label>

                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type='radio' name='difficulty' id='hard' className='bg-[#13ec6a]' />
                        <label htmlFor='hard'>Hard</label>

                    </div>

                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm '>DIET TYPE</p>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='border border-[#1c2720] rounded-2xl text-sm py-0.5 active:bg-[#13ec6a] flex justify-center items-center'>Vegetarian</div>
                        <div className='border border-[#1c2720] rounded-2xl text-sm py-0.5 active:bg-[#13ec6a] flex justify-center items-center'>Vegan</div>
                        <div className='border border-[#1c2720] rounded-2xl text-sm py-0.5 active:bg-[#13ec6a] flex justify-center items-center'>keto</div>
                        <div className='border border-[#1c2720] rounded-2xl text-sm py-0.5 active:bg-[#13ec6a] flex justify-center items-center'>Gluten-Free</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 text-sm'>
                    <p>Cooking Time</p>
                    {/* Progress Bar */}
                    <div className="flex w-full h-3.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#13ec6a] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: '25%' }}>25 mins</div>
                    </div>

                </div>
                <button className='border border-[#13ec6a] rounded-lg text-[#13ec6a] hover:text-black hover:bg-[#b3f4cd]'>Clear All Filters</button>
            </div>


        </div>
    )
}

export default FilterComponent