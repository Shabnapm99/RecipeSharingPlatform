import React from 'react'
import { useSelector } from 'react-redux'
import RecipeCard from '../../components/Card/RecipeCard';

function PopularRecipe() {
    const recipes = useSelector((state)=>state.recipes.recipes);
    
  return (
    <div className='w-[90vw] mx-auto rounded-lg'>
        <h2 className='text-3xl font-semibold text-white mb-5'>Trending Now</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
            recipes.map((recipe)=>{
                return(
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                )
            })
        }

        </div>
        
    </div>
  )
}

export default PopularRecipe