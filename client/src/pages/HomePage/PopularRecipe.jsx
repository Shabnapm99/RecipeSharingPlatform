import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import RecipeCard from '../../components/Card/RecipeCard';
import Spinner from '../../components/Card/Spinner';
import { popularRecipes as fetchPopularRecipes} from '../../services/recipeServices.js'
import { toast } from 'react-toastify';

function PopularRecipe() {
    const recipes = useSelector((state) => state.recipes.recipes);
    let [loading, setLoading] = useState(false);
    // let popularRecipes = recipes.filter((recipe) => recipe?.rating > 4.8 && recipe?.cookingTime > 15);//this will filter the recipes and return recipes which have rating greater than 4.8
    const [popularRecipes, setPopularRecipes] = useState([]);
    // let popularRecipesToshow = popularRecipes.slice(0, 4);//to show only 4 items

    useEffect(() => {

        let getPopularRecipes = async () => {

            try {
                let response = await fetchPopularRecipes();
                setPopularRecipes(response.data.recipes || []);

            } catch (error) {
                console.log(error);
                toast.error("something went wrong while fetching popular recipes")
            } finally { setLoading(false) }
        }
        getPopularRecipes();
    }, [])
    return (
        <div className='w-[90vw] mx-auto rounded-lg relative'>
            <h2 className='text-2xl md:text-3xl font-semibold text-white mb-5'>Trending Now</h2>
            {loading ? <Spinner loading={loading} /> :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        popularRecipes?.map((recipe) => {
                            return (
                                <RecipeCard key={recipe?._id} recipe={recipe} />
                            )
                        })
                    }

                </div>
            }
        </div>
    )
}

export default PopularRecipe