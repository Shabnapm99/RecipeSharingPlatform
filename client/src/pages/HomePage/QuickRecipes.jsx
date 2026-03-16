import React, { useState, useEffect } from 'react';
import RecipeCard from '../../components/Card/RecipeCard';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Card/Spinner'
import { getQuickRecipes } from '../../services/recipeServices';
import { toast } from 'react-toastify';

function QuickRecipes() {

    let [loading, setLoading] = useState(true);
    const [quickRecipes, setQuickRecipes] = useState([]);

    useEffect(() => {
        let getPopularRecipes = async () => {

            try {
                let response = await getQuickRecipes();
                setQuickRecipes(response.data.recipes || []);

            } catch (error) {
                console.log(error);
                toast.error("something went wrong while fetching quick recipes")
            } finally { setLoading(false) }
        }
        getPopularRecipes();
    }, [])

    return (
        <div className='w-[90vw] mx-auto rounded-lg relative'>
            <h2 className='text-2xl md:text-3xl font-semibold text-white mb-5'>Quick & Easy(under 15 mins)</h2>
            {loading ? <Spinner loading={loading} /> :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        quickRecipes.map((recipe) => {
                            return (
                                <RecipeCard key={recipe?._id} recipe={recipe} />
                            )
                        })
                    }

                </div>}
        </div>
    )
}

export default QuickRecipes