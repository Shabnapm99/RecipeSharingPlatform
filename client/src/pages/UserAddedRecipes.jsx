import React from 'react'
import RecipeCard from '../components/Card/RecipeCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getaddedRecipes } from '../services/recipeServices';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

function UserAddedRecipes() {
    const [addedRecipes, setAddedRecipes] = useState([]);
    const navigate = useNavigate();

    //to get the recipes the logged in user added
    useEffect(() => {
        const getUserAddedRecipes = async () => {
            try {
                let response = await getaddedRecipes();
                setAddedRecipes(response.data.recipes)

            } catch (error) {
                console.log(error);
                toast.error("Something went wrong while fetching added recipes");
            }
        }
        getUserAddedRecipes();
    }, [])
    return (
        <div className='bg-[#1c2720] p-5'>
            <div className='w-[90vw] mx-auto rounded-lg'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl font-semibold text-white mb-5'>Your CookBook</h2>
                    <button className='border border-green-500/80 py-0.5 px-3 rounded text-green-600 font-medium hover:bg-[#13ec6a] hover:text-white'
                        onClick={() => { navigate('/add') }}><span>Add</span><span className='hidden md:inline'> Recipe</span></button>

                </div>

                <div className='flex items-center gap-2 mb-2 text-sm'>

                    <h6 className='font-semibold text-[#13ec6a]'>{addedRecipes.length} Recipes saved</h6>
                </div>

                {/* Saved Recipes section */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        addedRecipes.map((recipe, index) => {
                            return (
                                <RecipeCard key={recipe?._id || index} recipe={recipe} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UserAddedRecipes