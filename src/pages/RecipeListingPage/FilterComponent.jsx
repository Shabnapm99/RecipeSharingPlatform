import React, { useState } from 'react'
import { LuFilter } from "react-icons/lu";

function FilterComponent() {

    const [showFiltersDiv, setShowFiltersDiv] = useState(false);//state to toggle show filterDiv when clicked on filter icon on small screen
    const [cuisine, setCuisine] = useState("");

    //Filter function

    function filter(event) {

        console.log(`'I am getting called'${event.target.value}`);
        
        

    }

    return (
        <div className=' text-white bg-[#364f3f] rounded p-3 flex flex-col gap-3'>
            <div className={`flex justify-between items-center md:border-b md:pb-3 ${showFiltersDiv && 'border-b pb-3'}`}>
                <div className='flex justify-center items-center gap-2'>
                    <LuFilter />
                    <h3 className=''>Filters</h3>
                </div>
                {/* Filter Icon on small screen */}
                <LuFilter className='text-sm md:hidden' onClick={() => setShowFiltersDiv(!showFiltersDiv)} />
            </div>
            <div className={`${showFiltersDiv ? 'flex' : 'hidden'} md:flex flex-col gap-3 `}>
                <div className='flex flex-col gap-2 text-sm'>
                    <label htmlFor='cuisine'>Cuisine</label>
                    <select className='bg-[#1c2720] block p-1.5 rounded' value={cuisine} onChange={(e)=>setCuisine(e.target.value)}>
                        <option value=''>All cuisines</option>
                        <option value='italian'>Italian</option>
                        <option value='american'>American</option>
                        <option value='asian'>Asian</option>
                        <option value='mexican'>Mexican</option>
                        {/* <option value='mexican'>Mexican</option> */}
                        <option value='mediterranean'>Mediterranean</option>
                        <option value='pakistani'>Pakistani</option>
                        <option value='japanese'>Japanese</option>
                        <option value='moroccan'>Moroccan</option>
                        <option value='greek'>Greek</option>
                        <option value='korean'>Korean</option>
                        <option value='thai'>Thai</option>
                        <option value='indian'>Indian</option>
                        <option value='turkish'>Turkish</option>
                        <option value='russian'>Russian</option>
                        <option value='lebanese'>Lebanese</option>
                        <option value='brazilian'>Brazilian</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2 text-sm'>
                    <p>Difficulty</p>
                    <div className='flex gap-2 items-center'>
                        <input type='radio' name='difficulty' id='easy' onChange={filter} value={'easy'} />
                        <label htmlFor='easy'>Easy(under 30 mins)</label>

                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type='radio' name='difficulty' id='medium' onChange={filter} value={'medium'} />
                        <label htmlFor='medium'>Medium</label>

                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type='radio' name='difficulty' id='hard' className='bg-[#13ec6a]' onChange={filter} value={'hard'} />
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