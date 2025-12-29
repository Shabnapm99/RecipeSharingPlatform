import React, { useState, useEffect } from 'react';
import RecipeCard from '../../components/Card/RecipeCard';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Card/Spinner'

function QuickRecipes() {

    const recipes = useSelector((state) => state.recipes.recipes);
    let [loading, setLoading] = useState(true);
    let QuickRecipes = recipes.filter((recipe) => recipe?.cookTimeMinutes < 15);//this will filter the recipes and return recipes which have rating greater than 4.8
    let QuickRecipesToshow = QuickRecipes.slice(0, 4);//to show only 4 items

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);//runs on mounting to show spinner while loading
    }, [])

    return (
        <div className='w-[90vw] mx-auto rounded-lg relative'>
            <h2 className='text-2xl md:text-3xl font-semibold text-white mb-5'>Quick & Easy(under 15 mins)</h2>
            {loading ? <Spinner loading={loading} /> :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        QuickRecipesToshow.map((recipe) => {
                            return (
                                <RecipeCard key={recipe?.uniqueId} recipe={recipe} />
                            )
                        })
                    }

                </div>}
        </div>
    )
}

export default QuickRecipes