import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { setAuthUser, setIsLoggedIn } from '../features/userSlice'
import { useDispatch } from 'react-redux'
import { app } from '../utils/firebaseConfig';
import ButtonSpinner from '../components/Card/ButtonSpinner';

const auth = getAuth(app);

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [showErrorPara, setShowErrorPara] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // const loginUser = ()=>{
  //   signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
  //     const user = userCredential.user;
  //     // dispatch(setIsLoggedIn(auth.currentUser));
  //     // dispatch(setAuthUser(user));
  //     console.log('successfully logged in');
  //     navigate('/');
  //   }).catch((error)=>{
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     setAlertMessage(errorMessage,errorCode);
  //     setShowErrorPara(true);
  //   })
  // }

  const loginUser = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');

    } catch (error) {
      setAlertMessage(error.message);
      setShowErrorPara(true);
    }finally{
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowErrorPara(false)
    loginUser();
    setEmail('');
    setPassword('');

  }


  return (
    <div className='bg-[#1c2720] w-screen h-screen flex justify-center items-center'>

      <div className='flex rounded-lg bg-[#102217] h-screen md:h-[70vh] lg:h-screen w-full lg:w-[80%]'>

        {/* Leftside : Login */}
        <div className=' flex flex-col justify-center px-6 py-12 w-full md:w-1/2'>
          <div className='flex items-center gap-3 mb-2'>
            {/* Logo and brand */}
            <div className=' flex justify-center items-center h-10 w-10 rounded-full bg-white/10'>
              <img src='/images/BrandIcons.png' alt='Brandicon' className='w-[75%] h-[75%] object-fit' />
            </div>

            <h2 className='text-xl font-bold text-white'>CookBook</h2>
          </div>
          {/* Headline */}
          <div>
            <h1 className='text-3xl font-bold text-white'>Welcome Back</h1>
            <p className='text-base text-gray-400 mt-2'>Login to access your saved recipes and share you new recipe.</p>
            {showErrorPara && <p className='text-sm text-red-500 mt-1'>{alertMessage}</p>}
          </div>
          {/* Form */}
          <div className='mt-8'>
            <form className='' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-5'>
                <div className=''>
                  <label htmlFor='email' className='text-white block text-sm'>Email or UserName</label>
                  <input className='mt-2 rounded-2xl py-2.5 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm' type='email' id='email' required placeholder='example@gmail.com' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className=''>
                  <label htmlFor='pswd' className='text-white block text-sm'>Password</label>
                  <input className='mt-2 rounded-2xl py-2.5 px-5 ring-1 ring-gray-300 placeholder:text-gray-400 text-white w-full bg-[#1c2720] text-sm placeholder:font-extrabold placeholder:text-xl' type='password' id='pswd' required placeholder='.......' value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='text-end'>
                  <a className='text-sm font-medium text-[#13ec6a]' href='#'>Forgot password?</a>
                </div>

                {/* Submit button */}
                <button className='rounded-2xl py-2.5 px-5  text-sm font-bold text-[#102217] bg-[#13ec6a] hover:bg-[#13ec6a]/90 relative' type='submit'>Login
                {loading&&<ButtonSpinner loading={loading}/>}</button>

              </div>

            </form>
            <hr className='text-[#28392f] mt-8' />
            {/* Sign up link */}
            <p className='mt-8 text-center text-sm text-gray-400'>
              <span className='block'>New here? <Link to={'/signup'} className='font-semibold text-[#13ec6a] hover:text-[#13ec6a]/80'>Create an account</Link></span>
              <Link to={'/'}><span className='block font-bold'>Home</span></Link>
            </p>


          </div>
        </div>

        {/* RightSide:image */}

        <div className='w-1/2 hidden md:block'>
          <img src='/images/Login.png' className='w-full h-full object-cover' />

        </div>

      </div>
    </div>
  )
}

export default Login