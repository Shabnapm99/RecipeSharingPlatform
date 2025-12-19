import React, { useEffect } from 'react'
import { useRouteError } from 'react-router-dom'

function NotFound() {

    const error = useRouteError();
    //this error variable will now have error status,status text, message etc.. we can pass this as the errorElement instead of  default error screen in React Router
    // useEffect(()=>{
    //     console.log(error)

    // },[])
    return (
        <div className='w-screen h-screen flex justify-center items-center'>

            <div className='flex flex-col items-center'>
                <h1 className='font-extrabold text-3xl'>{error.status}</h1>
                <h2 className='text-2xl font-bold'>Oops!!!</h2>
                <p>Something went wrong</p>
                <p><i>{error.statusText}</i></p>
            </div>

        </div>

    )
}

export default NotFound