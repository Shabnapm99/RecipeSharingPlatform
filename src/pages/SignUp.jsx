import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Card/Modal';

function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z].{7,}$/;
    if (name.trim() === '') {
      alert('please provide valid name');
      return;
    } else if (email.trim() === '' || emailRegex.test(email) === false) {
      alert('please provide a valid email');
      return;
    }
    else if (password.trim() === '' || passWordRegex.test(password) === false) {
      alert('plese provide valid password');
      return;
    } else if (password !== confirmPassword) {
      alert('passwords Do not match');
      return;

    } else setShowModal(true);
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

  }

  return (
    <div className='bg-[#1c2720] w-screen h-screen flex justify-center items-center'>

      <div className='flex flex-col md:flex-row rounded-lg bg-[#102217] h-screen md:h-[70vh] lg:h-screen w-full lg:w-[80%]'>

        {/* Brand name and icon on small screen */}

        <div className='block md:hidden pt-4 px-4'>
          <div className='flex gap-3 items-center cursor-pointer' onClick={() => navigate('/')}>
            <img src='/images/BrandIcons.png' alt='BrandIcon' />
            <span className='text-xl md:text-2xl font-bold text-white'>CookBook</span>
          </div>
        </div>

        {/* RightSide:image */}

        <div className='w-1/2 relative hidden md:block'>
          <img src='/images/signup.png' className='w-full h-full object-cover' />
          {/* Text div on image */}
          <div className='absolute top-2 left-2 '>
            <div className='flex gap-3 items-center cursor-pointer' onClick={() => navigate('/')}>
              <img src='/images/BrandIcons.png' alt='BrandIcon' />
              <span className='text-xl md:text-2xl font-bold text-white'>CookBook</span>
            </div>
          </div>
          <div className='absolute top-60 left-12 lg:top-50 lg:left-40 text-center'>
            <h1 className='text-5xl font-bold'>
              <span className='block text-white'>Master Your</span>
              <span className='block text-[#13ec6a]'>Kitchen Game</span>
            </h1>

          </div>
        </div>

        {/* rightside : register */}
        <div className=' flex flex-col justify-center px-6 py-12  md:w-1/2 w-full'>
          {/* Headline */}
          <div>
            <h1 className='text-2xl font-bold text-white'>Create an Account</h1>
            {/* <p className='text-base text-gray-400 mt-2'>Login to access your saved recipes and share you new recipe.</p> */}
          </div>
          {/* Form */}
          <div className='mt-5'>
            <form className='' noValidate onSubmit={handleSubmit}>
              <div className='flex flex-col gap-5'>
                <div className=''>
                  <label htmlFor='name' className='text-white block text-sm'>Name</label>
                  <input className='mt-2 rounded-2xl py-2 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm' type='text' id='name' minLength={3} maxLength={100} required placeholder='enter your name here' value={name}
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div className=''>
                  <label htmlFor='email' className='text-white block text-sm'>Email or UserName</label>
                  <input className='mt-2 rounded-2xl py-2 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm' type='email' id='email' required placeholder='example@gmail.com' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className=''>
                  <label htmlFor='pswd' className='text-white block text-sm'>Password</label>
                  <input className='mt-2 rounded-2xl py-2 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm placeholder:font-extrabold placeholder:text-xl' type='password' id='pswd' required placeholder='.......' value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className=''>
                  <label htmlFor='confirmpswd' className='text-white block text-sm'>Confirm Password</label>
                  <input className='mt-2 rounded-2xl py-2 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm placeholder:font-extrabold placeholder:text-xl' type='password' id='confirmpswd' required placeholder='........' value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>


                {/* Submit button */}
                <button className='rounded-2xl py-2.5 px-5  text-sm font-bold text-[#102217] bg-[#13ec6a] hover:bg-[#13ec6a]/90' type='submit'>Login</button>

              </div>

            </form>
            {
              showModal && <Modal onClose={() => setShowModal(false)} text='Successfully registered to CookBook' />
            }
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