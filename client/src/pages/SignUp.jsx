import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../components/Card/Modal';
import Spinner from '../components/Card/Spinner';
import { axiosInstance } from '../axios/axiosInstance';
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [occupation, setOccupation] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showErrorPara, setShowErrorPara] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();


  const signUpUser = async () => {
    try {
      setLoading(true);
      let response = await axiosInstance.post('/register', { name, email, password, occupation })
      if (response.status === 201) {
        console.log("User created succesfully");
        setShowModal(true);//show success Modal
        setName('');
        setPassword('');
        setEmail('');
        setOccupation('');
        setShowErrorPara(false);

      }


    } catch (error) {
      // setAlertMessage(error.response.data.message);
      // setShowErrorPara(true);
      toast.error(error.response.data.message)
      console.log(error.code, error.message)

    } finally {
      setLoading(false);
    }

  }

  // submit button handler

  function handleSubmit(event) {
    event.preventDefault();//prevent from reloading
    setShowErrorPara(false);
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z].{7,}$/;
    if (name.trim() === '' || name.trim().length < 3 || name.trim().length > 50) {
      setShowErrorPara(true);
      setAlertMessage('please provide a valid name');
      return;
    } else if (email.trim() === '' || emailRegex.test(email) === false) {
      setShowErrorPara(true);
      setAlertMessage('please provide a valid email');
      return;
    } else if (occupation.trim() === '' || occupation.trim().length < 3 || occupation.trim().length > 50) {
      setShowErrorPara(true);
      setAlertMessage('please provide a valid occupation');
      return;
    }
    else if (password.trim() === '' || passWordRegex.test(password) === false) {
      setShowErrorPara(true);
      setAlertMessage('please provide a valid password');
      return;
    }
    else {

      signUpUser();
    }
  }

  return (
    <div className='bg-[#1c2720] w-screen h-screen flex justify-center items-center relative'>
      {loading ? <Spinner loading={loading} /> :

        <div className='flex flex-col md:flex-row items-stretch rounded-lg bg-[#102217] h-full w-full lg:w-[80%] overflow-hidden'>

          {/* Brand name and icon on small screen */}

          <div className='block md:hidden pt-4 px-4'>
            <div className='flex gap-3 items-center cursor-pointer' onClick={() => navigate('/')}>
              <img src='/images/BrandIcons.png' alt='BrandIcon' />
              <span className='text-xl md:text-2xl font-bold text-white'>CookBook</span>
            </div>
          </div>

          {/* Left Side (Image) */}
          <div className='hidden md:block md:w-1/2 relative overflow-hidden'>
            {/* The 'absolute inset-0' forces the image to ignore all internal padding/gaps */}
            <img
              src='/images/signup.png'
              className='absolute inset-0 w-full h-full object-cover'
              alt='promo image'
            />

            {/* Overlay Content */}
            <div className='absolute top-6 left-6 z-10'>
              <div className='flex gap-3 items-center cursor-pointer' onClick={() => navigate('/')}>
                <img src='/images/BrandIcons.png' alt='BrandIcon' />
                <span className='text-xl md:text-2xl font-bold text-white'>CookBook</span>
              </div>
            </div>

            <div className='absolute inset-0 flex items-center justify-center p-12'>
              <h1 className='text-5xl font-bold text-center leading-tight'>
                <span className='block text-white'>Master Your</span>
                <span className='block text-[#13ec6a]'>Kitchen Game</span>
              </h1>
            </div>
          </div>

          {/* rightside : register */}
          <div className='flex flex-col justify-center pl-4 pr-6 py-4 flex-1'>
            {/* Headline */}
            <div>
              <h1 className='text-2xl font-bold text-white'>Create an Account</h1>
              {/* Error message */}
              {showErrorPara && <p className='text-sm text-red-500 mt-1'>{alertMessage}</p>}
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
                    <input className='mt-2 rounded-2xl  py-2 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm' type='email' id='email' required placeholder='example@gmail.com' value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div className=''>
                    <label htmlFor='occupation' className='text-white block text-sm'>Occupation</label>
                    <input className='mt-2 rounded-2xl  py-2 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm' type='text' id='occupation' required placeholder='Chef, Home maker' value={occupation} minLength={3} maxLength={100}
                      onChange={(e) => setOccupation(e.target.value)} />
                  </div>

                  <div className=''>
                    <label htmlFor='pswd' className='text-white block text-sm'>Password</label>
                    <div className="relative">
                      <input className='mt-2 rounded-2xl  py-2 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm placeholder:font-extrabold placeholder:text-xl'
                        type={showPassword ? 'text' : 'password'} id='pswd' required placeholder='.......' value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                      {showPassword ? <FaRegEye className='text-white absolute top-5 right-2' onClick={() => setShowPassword(false)} /> : <FaRegEyeSlash className='text-white absolute top-5 right-2' onClick={() => setShowPassword(true)} />}


                    </div>

                  </div>

                  {/* Submit button */}
                  <button className='rounded-2xl py-2.5 px-5  text-sm font-bold text-[#102217] bg-[#13ec6a] hover:bg-[#13ec6a]/90' type='submit'>Create Account
                    {loading && <ButtonSpinner loading={loading} />}</button>

                </div>

              </form>
              {/* SuccesFul Modal */}
              {
                showModal && <Modal onClose={() => setShowModal(false)} text={`Successfully registered to CookBook ${name}.`} />
              }
              <hr className='text-[#28392f] mt-6' />
              {/* Sign up link */}
              <p className='mt-5 text-center text-sm text-gray-400'>
                <span>Already have an account? <Link to={'/login'} className='font-semibold text-[#13ec6a] hover:text-[#13ec6a]/80'>Login</Link></span>
                {/* <Link to={'/'}><span className='block font-bold'>Home</span></Link> */}
              </p>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default SignUp