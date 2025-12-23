import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PreviewCard from './PreviewCard';
import SaveCard from './SaveCard';
import Ingredients from './Ingredients';
import Steps from './Steps';
import Modal from '../../components/Card/Modal';

function AddRecipe() {
  return (
    <main className='bg-[#1c2720] py-9 flex flex-col items-center'>
      <section className='w-[80%]'>
        {/* header */}
        <div className='flex gap-4 items-center'>
          <Link to={'/'}><button className='hidden text-white/30 md:flex gap-2 item-center justify-center hover:border hover:rounded-lg px-2'>
            <div className='flex items-center'><FaArrowLeft /></div>
            <p className=''>Back</p>
          </button>
          </Link>
          <div >
            <h1 className='text-white text-3xl font-bold'>Add New Recipe</h1>
            <p className='mt-1 text-white/30'>Share your delicious creation with the community</p>

          </div>

        </div>
      </section>

      <section className='w-[80%] mx-auto flex flex-col lg:flex-row lg:gap-3'>

        {/*information */}
        <div className=' w-full lg:w-[75%]'>
          <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217]'>
            {/* Basic information */}
            <div className='flex flex-col text-white gap-2'>
              <div className=''>Basic information</div>
              {/* input recipe title */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='title' className='font-medium text-[#13ec6a]/50'>Recipe title</label>
                <input type='text' id='title' placeholder='Enter your recipe title' className='border border-[#3b5445] rounded p-2 bg-[#1c2720] text-sm' />
              </div>
              {/* Description input */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='description' className='text-[#13ec6a]/50 font-medium'>Description</label>
                <textarea type='text' id='description' placeholder='Enter Description' className='border border-[#3b5445] rounded p-2 bg-[#1c2720] text-sm' minLength={5} maxLength={100}/>
              </div>
              {/* Other inputs */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='flex flex-col gap-1'>
                  <label className='text-[#13ec6a]/50 font-medium'>Cooking Time(Mins)</label>
                  <input type='number' min={5} max={60} placeholder='5' className='border border-[#3b5445] rounded px-2 py-1.5 bg-[#1c2720] text-sm' />
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='text-[#13ec6a]/50 font-medium'>Difficulty</label>
                  <select className='bg-[#1c2720] block p-1.5 rounded border border-[#3b5445] text-sm'>
                    <option selected>Easy</option>
                    <option>Hard</option>
                    <option>Medium</option>
                  </select>
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='text-[#13ec6a]/50 font-medium'>Diet type</label>
                  <select className='bg-[#1c2720] block p-1.5 rounded border border-[#3b5445] text-sm'>
                    <option selected>Vegetarian</option>
                    <option>Vegan</option>
                    <option>Keto</option>
                    <option>Gluten-free</option>
                  </select>
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='text-[#13ec6a]/50 font-medium'>Cuisine</label>
                  <select className='bg-[#1c2720] block p-1.5 rounded border border-[#3b5445] text-sm'>
                    <option selected>All cuisines</option>
                    <option>Italian</option>
                    <option>American</option>
                    <option>Asian</option>
                    <option>Mexican</option>
                    <option>Mexican</option>
                    <option>Mediterranean</option>
                    <option>Pakistani</option>
                    <option>Japanese</option>
                    <option>Moroccan</option>
                    <option>Greek</option>
                    <option>Korean</option>
                    <option>Thai</option>
                    <option>Indian</option>
                    <option>Turkish</option>
                    <option>Russian</option>
                    <option>Lebanese</option>
                    <option>Brazilian</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Recipe image */}
          <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217]'>
            <div className='flex flex-col text-white'>
              <div className=''>Basic information</div>
              {/* image url */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='title' className='text-[#13ec6a]/50 font-medium'>Image URL</label>
                <input type='text' id='title' placeholder='Enter url' className='border border-[#3b5445] rounded p-2 bg-[#1c2720]' />
              </div>
              <div className='flex gap-2 my-2'>
                <input type='file' className='border border-[#3b5445] rounded w-35 px-2 py-1 bg-[#1c2720]' />
                <p>or paste URL above</p>
              </div>

            </div>

          </div>

          {/* Ingredients */}

          <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217]'>
            <Ingredients />
          </div>

          {/* Instructions */}

          <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217]'>
            <Steps />
          </div>


        </div>


        {/* preview and save */}
        <div className='flex flex-col lg:gap-2 flex-1'>
          <PreviewCard />
          <SaveCard />

        </div>

      </section>
    
    </main>
  )
}

export default AddRecipe