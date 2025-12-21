import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

function RecipeCard({ recipe }) {
    return (
        <div className='bg-[#3c4f43] flex flex-col gap-1 rounded-xl cursor-pointer hover:-translate-y-1 group'>
            <div className='w-[full] relative'>
                <img src={recipe?.image} className='max-w-full max-h-full rounded-t-xl relative' />
                <div className='absolute top-0 left-0 bg-black/35 z-40 w-full h-full rounded-t-xl'></div>
                <div className='absolute top-3 right-3 rounded-2xl bg-black/65 text-xs px-2 py-0.5 text-white'><span>{recipe?.cuisine}</span></div>
                <div className='absolute bottom-3 left-3 rounded-2xl bg-black/65 text-xs px-2 py-0.5 text-white flex items-center gap-1'>
                    <MdAccessTime />
                    <p >{recipe?.cookTimeMinutes} Mins</p>
                </div>
            </div>
            <div className='p-4'>
                <div className='flex justify-between items-center text-xs font-medium'>
                    <div className='flex items-center gap-2 text-gray-400 '>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-yellow-500' />
                            <p className=''>{recipe?.rating} ({recipe?.reviewCount})</p>

                        </div>
                        {/* <div className='flex items-center gap-1'>
                            <MdAccessTime />
                            <p >{recipe.cookTimeMinutes}</p>
                        </div> */}

                    </div>
                    <div className='text-[#13ec13]'>{recipe?.difficulty}</div>

                </div>
                <h3 className='text-white font-semibold group-hover:text-[#13ec13]'>{recipe?.name}</h3>
                <p></p>
                <p></p>

            </div>



        </div>
    )
}

export default RecipeCard