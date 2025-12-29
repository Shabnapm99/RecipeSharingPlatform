import React from 'react'
import { FaStar } from "react-icons/fa";
import { LuChefHat } from 'react-icons/lu';
import { MdAccessTime } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function RecipeCard({ recipe }) {

    let navigate = useNavigate();

    return (
        <div className='bg-[#3c4f43] flex flex-col gap-1 rounded-xl cursor-pointer hover:-translate-y-1 group' onClick={() => navigate(`/recipes/${recipe?.uniqueId}`)}>
            {/* Image container */}
            <div className='w-[full] relative'>
                <img src={recipe?.image} className='max-w-full max-h-full rounded-t-xl relative' alt='recipe image'/>
                <div className='absolute top-0 left-0 bg-black/35 z-40 w-full h-full rounded-t-xl'></div>
                <div className='absolute top-3 right-3 rounded-2xl bg-black/65 text-xs px-2 py-0.5 text-white'><span>{recipe?.cuisine}</span></div>
                <div className='absolute bottom-3 left-3 rounded-2xl bg-black/65 text-xs px-2 py-0.5 text-white flex items-center gap-1'>
                    <MdAccessTime />
                    <p >{recipe?.cookTimeMinutes} Mins</p>
                </div>
            </div>
            {/* Other details */}
            <div className='p-4'>
                <div className='flex justify-between items-center text-xs font-medium'>
                    <div className='flex items-center gap-2 text-gray-400 '>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-yellow-500' />
                            <p className=''>{recipe?.rating} ({recipe?.reviewCount})</p>
                        </div>
                    </div>
                    <div className='text-[#13ec13]'>{recipe?.difficulty}</div>
                </div>
                <h3 className='text-white font-semibold group-hover:text-[#13ec13] mb-4'>{recipe?.name}</h3>
                <div className='text-white/80 text-sm pt-4 ps-1 border-t border-gray-500 flex gap-3 items-center'>
                    <LuChefHat />
                    <p className=' '>{recipe?.author}</p>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard