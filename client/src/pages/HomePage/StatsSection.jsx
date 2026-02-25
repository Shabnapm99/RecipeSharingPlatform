import React from 'react'

function StatsSection() {
  return (
    <div className='w-[90vw] mx-auto grid rounded-lg grid-cols-2 md:grid-cols-4 text-center '>
        <div className='p-2'>
            <h2 className='text-3xl font-bold text-[#13ec13]'>15k+</h2>
            <p className='text-gray-400 p-2'>Recipes</p>
        </div>
        <div className='p-2'>
            <h2 className='text-3xl font-bold text-[#13ec13]'>75k+</h2>
            <p className='text-gray-400 p-2'>Users</p>
        </div>
        <div className='p-2'>
            <h2 className='text-3xl font-bold text-[#13ec13]'>150k+</h2>
            <p className='text-gray-400 p-2'>Reviews</p>
        </div>
        <div className='p-2'>
            <h2 className='text-3xl font-bold text-[#13ec13]'>25</h2>
            <p className='text-gray-400 py-2'>Countries</p>
        </div>

    </div>
  )
}

export default StatsSection