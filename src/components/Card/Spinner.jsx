import React from 'react'
import { BeatLoader, CircleLoader, ClipLoader } from 'react-spinners'

function Spinner({loading}) {
  return (
    <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 bg-black/40'>
        <CircleLoader loading={loading} color='green' size={50}/>

    </div>
   
  )
}

export default Spinner