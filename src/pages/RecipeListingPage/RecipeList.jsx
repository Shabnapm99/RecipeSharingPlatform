import React, { useEffect } from 'react'
import FilterComponent from './FilterComponent'
import { useSelector } from 'react-redux';
import { IoSearchSharp } from 'react-icons/io5';
import { MdKeyboardVoice } from "react-icons/md";
import RecipeCard from '../../components/Card/RecipeCard';
import { useLoaderData } from 'react-router-dom';

// Loader function

export async function recipeLoader(){

  let response = await fetch('https://dummyjson.com/recipes');
  let data = await response.json();//this returns an object
  return data.recipes;// this will return the recipes array

  }

function RecipeList() {
  // const recipes = useSelector((state) => state.recipes.recipes);
  const recipes = useLoaderData();
  // useEffect(()=>{
  //   console.log(recipe);
  // },[])
  

  return (
    <main className='bg-[#1c2720] p-3'>
      {/* search bar */}
      <section className='w-full'>
        <h2 className='text-xl font-bold text-white mb-4'>Search Recipes</h2>
        <div className='relative w-[90%] md:w-[50%]'>
          <input placeholder='Searchfor recipes, ingredients or cusines...' className='bg-[#3c4f43] text-white text-sm rounded-2xl py-2 px-10 w-full' />
          <div className='absolute top-2 left-2 text-white text-lg'><IoSearchSharp/></div>
          <div className='absolute top-2 right-2 text-white text-lg cursor-pointer'><MdKeyboardVoice/></div>
        </div>

      </section>
      <div className='flex gap-4 mt-6 justify-center'>

        {/* Filter section */}

        <section className='basis-1/4'>
          <FilterComponent />
        </section>

        {/* Recipe list section */}

        <section className='basis-3/4'>
            <div>
              <h4 className='text-gray-500'>Found {recipes.length} Recipes</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                  recipes.map((recipe)=>{
                    return(
                      <RecipeCard key={recipe.id} recipe={recipe}/>
                    )
                  })
                }

              </div>
            </div>

        </section>

      </div>


    </main>
  )
}

export default RecipeList