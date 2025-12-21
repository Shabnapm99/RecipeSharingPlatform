import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='bg-[#1c2720] w-screen h-screen flex justify-center items-center'>

      <div className='flex rounded-lg bg-[#102217] max-h-screen w-[80%]'>

        {/* RightSide:image */}

        <div className='w-1/2 relative'>
          <img src='/images/signup.png' className='w-full h-full object-cover' />
          {/* Text div on image */}
          <div className='absolute top-2 left-2 '>
            <div className='flex gap-3 items-center cursor-pointer' onClick={() => navigate('/')}>
              <img src='/images/BrandIcons.png' alt='BrandIcon' />
              <span className='text-xl md:text-2xl font-bold text-white'>CookBook</span>
            </div>
          </div>
          <div className='absolute top-50 left-40 text-center'>
            <h1 className='text-5xl font-bold'>
              <span className='block text-white'>Master Your</span>
              <span className='block text-[#13ec6a]'>Kitchen Game</span>
            </h1>

          </div>
        </div>

        {/* rightside : register */}
        <div className=' flex flex-col justify-center px-6 py-12 w-1/2'>
          {/* Headline */}
          <div>
            <h1 className='text-2xl font-bold text-white'>Create an Account</h1>
            {/* <p className='text-base text-gray-400 mt-2'>Login to access your saved recipes and share you new recipe.</p> */}
          </div>
          {/* Form */}
          <div className='mt-5'>
            <form className=''>
              <div className='flex flex-col gap-5'>
                <div className=''>
                  <label htmlFor='name' className='text-white block text-sm'>Name</label>
                  <input className='mt-2 rounded-2xl py-2 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm' type='text' id='name' required placeholder='enter your name here' />
                </div>
                <div className=''>
                  <label htmlFor='email' className='text-white block text-sm'>Email or UserName</label>
                  <input className='mt-2 rounded-2xl py-2 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm' type='email' id='email' required placeholder='example@gmail.com' />
                </div>

                <div className=''>
                  <label htmlFor='pswd' className='text-white block text-sm'>Password</label>
                  <input className='mt-2 rounded-2xl py-2 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm' type='password' id='pswd' required />
                </div>

                <div className=''>
                  <label htmlFor='confirmpswd' className='text-white block text-sm'>Confirm Password</label>
                  <input className='mt-2 rounded-2xl py-2 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm' type='password' id='confirmpswd' required />
                </div>


                {/* Submit button */}
                <button className='rounded-2xl py-2.5 px-5  text-sm font-bold text-[#102217] bg-[#13ec6a] hover:bg-[#13ec6a]/90' type='submit'>Login</button>

              </div>

            </form>
            <hr className='text-[#28392f] mt-6' />
            {/* Sign up link */}
            <p className='mt-5 text-center text-sm text-gray-400'>
              <span>Already have an account? <Link to={'/login'} className='font-semibold text-[#13ec6a] hover:text-[#13ec6a]/80'>Login</Link></span>
            <Link to={'/'}><span className='block font-bold'>Home</span></Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp