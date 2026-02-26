import React from 'react'
import { CircleLoader } from 'react-spinners'

function Spinner({ loading }) {
  return (
    <div className='flex justify-center items-center absolute bg-black/40 inset-0'>
      <CircleLoader loading={loading} color='green' size={50} />
    </div>
  )
}

export default Spinner