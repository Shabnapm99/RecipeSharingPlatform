import React from 'react'
import RecipeCard from '../components/Card/RecipeCard'
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa6";

function Favorites() {
  const recipes = useSelector((state) => state.recipes.recipes);
  let favRecipe = recipes.slice(0,5);//dummy data
  return (
    <div className='bg-[#1c2720] p-5'>

      <div className='w-[90vw] mx-auto rounded-lg'>
            <h2 className='text-3xl font-semibold text-white mb-5'>Your CookBook</h2>
            <div className='flex items-center gap-2 mb-2 text-sm'>
              <FaHeart className='text-[#13ec6a]'/>
              <h6 className='font-semibold text-[#13ec6a]'>{favRecipe.length} Recipes saved</h6>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                favRecipe.map((recipe)=>{
                    return(
                        <RecipeCard key={recipe.id} recipe={recipe}/>
                    )
                })
            }
    
            </div>
            
        </div>

    </div>
        
  )
}

export default Favorites