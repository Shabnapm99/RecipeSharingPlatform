import React from 'react'
import { useSelector } from 'react-redux'
import RecipeCard from '../../components/Card/RecipeCard';
import { useLoaderData } from 'react-router-dom';

function PopularRecipe() {
    // const recipes = useSelector((state)=>state.recipes.recipes);
    const recipes = useLoaderData();
    let popularRecipes = recipes.filter((recipe)=> recipe.rating>4.8);//this will filter the recipes and return recipes which have rating greater than 4.8
    let popularRecipesToshow = popularRecipes.slice(0,4);
  return (
    <div className='w-[90vw] mx-auto rounded-lg'>
        <h2 className='text-2xl md:text-3xl font-semibold text-white mb-5'>Trending Now</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
            popularRecipesToshow.map((recipe)=>{
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