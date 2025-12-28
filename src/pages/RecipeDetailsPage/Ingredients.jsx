import React from 'react'

function Ingredients({ ingredients=[]}) {//take the default value of ingredients as empty array
    return (
        <div className='text-[#9db9a8] bg-black/10 border border-[#13ec6a]/30 rounded-lg p-6 flex flex-col gap-5 items-center h-fit lg:flex-1 w-full md:sticky md:right-0 md:top-28'>
            <h3 className='text-2xl font-bold'>Ingredients</h3>
            <div>
                {
                ingredients.map((ingredient, index) => {
                    return (
                        <div key={index} className='flex gap-3 p-2'>
                           
                            <input type="checkbox" className='accent-[#13ec6a]' />
                             <label>{ingredient}</label>
                        </div>
                    )
                })}

            </div>
            

        </div>
    )
}

export default Ingredients