import React, { useState } from 'react'
import PopularRecipe from './PopularRecipe'
import StatsSection from './StatsSection'
import EngagementSection from './EngagementSection'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Modal from '../../components/Card/Modal'
import QuickRecipes from './QuickRecipes'

function Home() {
    const isLoggedIn = useSelector((state)=>state.users.isLoggedIn);
    const [showModal,setShowModal] = useState(false);
    let navigate = useNavigate()

    function handleShareRecipe(){
        isLoggedIn?navigate('/add'):setShowModal(true);
    }
    return (
        <main className='bg-[#1c2720] pt-3'>

            {/* Hero Section */}

            <section className='h-screen w-full'>
                <div className='w-[90vw] h-[85vh] mx-auto rounded-lg relative flex items-center' style={{ backgroundImage: "url('/images/Home.png')" }}>
                    <div className='w-[90vw] h-[85vh] absolute bg-black/50 rounded-lg'></div>
                    <div className='w-3/4 h-3/4 flex justify-center items-center mx-auto '>
                        <div className='z-10'>
                            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center'>Welcome to CookBook!</h1>
                            <h2 className='text-3xl md:text-5xl font-bold text-gray-400 text-center'>Discover Amazing Recipes</h2>
                            <div className='flex flex-col md:flex-row gap-4 justify-center items-center mt-10'>

                                <Link to={'/recipes'}><button className='text-sm font-medium flex justify-center items-center gap-2 bg-[#13ec13] text-[#111814] py-1.5 px-7 rounded-lg cursor-pointer hover:bg-[#0fd30f]'>Explore Recipes</button></Link>
                                <button className='text-sm font-medium flex justify-center items-center gap-2 bg-[#3c4f43] text-white py-1.5 px-7 rounded-lg cursor-pointer hover:bg-white hover:text-[#0fd30f]' onClick={handleShareRecipe}>Share Your Recipe</button>
                                {showModal && <Modal onClose={() => setShowModal(false)} text='Login required to share Recipe' />}{/* show the modalonly if showModal is true */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured recipe section */}

            <section className='w-full mb-5 py-5 bg-[#222b25]'>
                <PopularRecipe />
            </section>

            {/* Quick and Edasy recipe section */}

            <section className='w-full my-5'>
                <QuickRecipes />
            </section>

            {/* Stats Section */}

            <section className='py-16 px-4 sm:px-6 lg:px-8 bg-[#28392f]'>
                <StatsSection />

            </section>

            {/* Engagement Section */}

            <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-green-500 to-green-600'>
                <EngagementSection />
            </section>
        </main>

    )
}

export default Home