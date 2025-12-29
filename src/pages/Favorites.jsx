import React from 'react'
import RecipeCard from '../components/Card/RecipeCard'
import { useSelector, useDispatch } from 'react-redux';
import { FaHeart } from "react-icons/fa6";
import { clearSavedRecipes } from '../features/favoritesSlice';

function Favorites() {
  const savedRecipes = useSelector((state) => state.favorites.savedRecipes);
  let dispatch = useDispatch();

  return (
    <div className='bg-[#1c2720] p-5'>

      <div className='w-[90vw] mx-auto rounded-lg'>
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl font-semibold text-white mb-5'>Your CookBook</h2>
          <button className='border border-green-500/80 py-0.5 px-3 rounded text-green-600 font-medium hover:bg-[#13ec6a] hover:text-white'
            onClick={() => dispatch(clearSavedRecipes())}><span>Clear</span><span className='hidden md:inline'> Favorites</span></button>

        </div>

        <div className='flex items-center gap-2 mb-2 text-sm'>
          <FaHeart className='text-[#13ec6a]' />
          <h6 className='font-semibold text-[#13ec6a]'>{savedRecipes.length} Recipes saved</h6>
        </div>

        {/* Saved Recipes section */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {
            savedRecipes.map((recipe, index) => {
              return (
                <RecipeCard key={recipe.uniqueId || index} recipe={recipe} />
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Favorites