import React from 'react'

function Ingredients({ ingredients }) {
    return (
        <div className='text-white bg-[#364f3f] rounded-lg p-6 flex flex-col gap-5 items-center h-fit lg:flex-1 w-full'>
            <h3 className='text-2xl font-bold'>Ingredients</h3>
            <div>
                {
                ingredients.map((ingredient, index) => {
                    return (
                        <div key={index} className='flex gap-3 p-2'>
                           
                            <input type="checkbox" />
                             <label>{ingredient}</label>
                        </div>
                    )
                })}

            </div>
            

        </div>
    )
}

export default Ingredients