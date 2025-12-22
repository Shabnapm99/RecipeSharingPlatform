import React from 'react'
import { FaStar } from 'react-icons/fa';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdAccessTime } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { LuChefHat } from "react-icons/lu";
import Ingredients from './Ingredients';
import { SiGooglegemini } from "react-icons/si";
import { IoMdArrowRoundForward } from "react-icons/io";
import InstructionCard from '../../components/Card/InstructionCard';
import { FaRegHeart } from "react-icons/fa6";
import { FiShare2,FiPrinter  } from "react-icons/fi";
import { Link } from 'react-router-dom';

function RecipeDetails() {

  const recipes = useSelector((state) => state.recipes.recipes);
  const recipe = recipes[3];
  return (
    <main className='bg-[#1c2720] p-3'>

      {/* Back button */}
      <div className='my-5 md:my-8  md:mx-5 lg:mx-14 '>
        <Link to={'/recipes'}><button className='text-gray-400 font-medium flex gap-3 items-center text-sm m-3 hover:border hover:border-bg-white/10 py-1 px-2 rounded-lg' ><IoMdArrowRoundBack />Back to Recipes</button>
      </Link>
      </div>


      {/* Recipe details section */}
      <section className='flex flex-col lg:flex-row gap-10 m-3 w-[85vw] mx-auto items-center lg:items-start'>
        <div className=''>

          {/* Recipe section */}

          <div className='w-[90vw] lg:w-[60vw] aspect-square lg:aspect-3/2 rounded-xl relative'>
            <img src={recipe.image} className='w-full h-full rounded-xl' />
            <div className='inset-0 bg-black/40 absolute top-0 left-0 rounded-xl'></div>
            <div className='flex items-center gap-2 absolute top-2 right-2'>
              <div className='rounded-full p-2 bg-black/65 text-white'>
              <FaRegHeart/>
              </div>
            <div className='rounded-full p-2 bg-black/65 text-white flex items-center gap-1'>
              <FiShare2 />
              
            </div>
            <div className='rounded-full p-2 bg-black/65 text-white flex items-center gap-1'>
              <FiPrinter  />
              
            </div>

            </div>
            
          </div>
          <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
            <h1 className="text-3xl md:text-4xl font-bold text-white/90 my-4">{recipe.name}</h1>
            <div className='flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 h-6 px-1 rounded-2xl w-fit'>
              <FaStar className='text-yellow-500 text-sm' />
              <p className='text-xs font-medium text-yellow-500'>{recipe?.rating} ({recipe?.reviewCount})</p>
            </div>

          </div>

          <p className='text-gray-500 my-2 text-sm md:text-base'>A rich and creamy pasta dish with garlic, parmesan, and fresh herbs</p>

          {/* Gemini Button */}
          <div className='hidden bg-linear-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-2 md:flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-2'>
            <div className='flex items-center gap-3'>
              <div className='bg-white/10 rounded-full p-2'>
                <SiGooglegemini className='text-blue-300' />
              </div>
              <div className=''>
                <p className='text-sm text-blue-100'>Want a quick overview?</p>
                <p className='text-xs text-blue-200/70 hidden md:block'>Get a concise summary and chef tips powered by Gemini AI</p>
              </div>
            </div>
            <button className='text-xs text-white bg-blue-600 hover:bg-blue-500 font-medium rounded-full flex items-center gap-2 px-2 py-1.5  '>
              <p>Summarize with Gemini</p>
              <IoMdArrowRoundForward className='' />
            </button>
          </div>

          {/* Gemini button in small screens */}

          <button className='text-xs text-white bg-blue-600 hover:bg-blue-500 font-medium rounded-full md:hidden items-center gap-2 px-2 py-1.5 flex '>
              <p>Summarize with Gemini</p>
              <IoMdArrowRoundForward className='' />
            </button>

          <div className='grid grid-cols-3 md:grid-cols-5 gap-4 my-3 py-3'>
            <div className='border border-[#13ec6a]/30 bg-[#1c2a23] rounded-lg text-sm py-0.5 flex justify-center items-center text-white gap-1'>
              <MdAccessTime />
              <p >{recipe?.cookTimeMinutes} Mins</p>
            </div>
            <div className='border border-[#13ec6a]/30 bg-[#1c2a23] rounded-lg text-sm py-0.5 flex justify-center items-center text-white'>{recipe.difficulty}</div>
            <div className='border border-[#13ec6a]/30 bg-[#1c2a23] rounded-lg text-sm py-0.5 flex justify-center items-center text-white'>{recipe.cuisine}</div>
            <div className='border border-[#13ec6a]/30 bg-[#1c2a23] rounded-lg text-sm py-0.5 flex justify-center items-center text-white'>diet type</div>
            <div className='border border-[#13ec6a]/30 bg-[#1c2a23] rounded-lg text-sm py-0.5 flex justify-center items-center text-white gap-1'>
              <LuChefHat />
              <p>author</p>
            </div>
          </div>

          {/* Instructions */}
          <div className='m-3 py-5 border-b border-gray-600'>
            <div className='flex justify-between items-center'>
              <h3 className='text-2xl font-bold text-white'>Instructions</h3>
              <div>counter</div>
            </div>
            <div className='py-4'>
              {
                recipe.instructions.map((instruction, index) => {
                  return <InstructionCard instruction={instruction} index={index} key={index} />
                })
              }

            </div>
          </div>



        </div>

        {/* Ingredients list*/}
        <Ingredients ingredients={recipe.ingredients} />
        
      </section>
    </main>
  )
}

export default RecipeDetails