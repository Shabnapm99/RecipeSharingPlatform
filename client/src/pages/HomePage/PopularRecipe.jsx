import React, { useEffect, useState } from 'react'
import RecipeCard from '../../components/Card/RecipeCard';
import Spinner from '../../components/Card/Spinner';
import { popularRecipes as fetchPopularRecipes } from '../../services/recipeServices.js'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

function PopularRecipe() {
    let [loading, setLoading] = useState(false);
    const [popularRecipes, setPopularRecipes] = useState([]);

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
        <motion.div className='w-[90vw] mx-auto rounded-lg relative'
            initial={{ y: 80, opacity: 0 }}        // start below
            whileInView={{ y: 0, opacity: 1 }}     // move up to position
            transition={{ duration: 0.6, ease: "easeOut" }}>
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
        </motion.div>
    )
}

export default PopularRecipe