import React from 'react'
import  {ClipLoader} from 'react-spinners'

function ButtonSpinner({loading}) {
  return (
    <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 bg-black/40'>
        <ClipLoader loading={loading} color='white' size={20}/>

    </div>
  )
}

export default ButtonSpinner