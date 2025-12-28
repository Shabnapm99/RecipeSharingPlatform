import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";
import { FaPrint } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes } from '../../features/recipeSlice'
import { getFirestore, doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { app } from '../../utils/firebaseConfig'
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Card/Spinner';
import ButtonSpinner from '../../components/Card/ButtonSpinner';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const date = new Date();

function SaveCard({ recipe, setFormData, setShowErrorPara }) {

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let recipes = useSelector((state) => state.recipes.recipes);
    let user = useSelector((state) => state.users.authUser);
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!recipe.name.trim() || !recipe.image.trim() || !recipe.description.trim()) return setShowErrorPara(true);
        console.log(recipe);

        // dispatch(setRecipes(recipe));
        // Add a new document in collection 'recipes in firestore

        const addData = async () => {
            try {
                setLoading(true);
                const docRef = await addDoc(collection(db, 'recipes'),
                    {
                        name: recipe.name,
                        image: recipe.image,
                        author: recipe.author,
                        description: recipe.description,
                        cuisine: recipe.cuisine,
                        dietType: recipe.dietType,
                        difficulty: recipe.difficulty,
                        cookTimeMinutes: recipe.cookTimeMinutes,
                        ingredients: recipe.ingredients,
                        instructions: recipe.instructions,
                        userId: user.id,//to know which user is adding the recipe
                        rating: 4.6,
                        reviewCount: 51,
                        createdAt: date.toDateString(),

                    })
                const newRecipe = { uniqueId: docRef.id, ...recipe };
                dispatch(setRecipes([...recipes, newRecipe]));

                setFormData({});//clear the input fields
                navigate(`/recipes`);//navigate to listing page

            } catch (error) {
                console.log(`Error || ${error}`)
            } finally { setLoading(false) }
        }

        addData();
        // navigate('/');//on save navigate to home page

    }


    return (
        <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217] text-white/90 flex flex-col gap-3'>

            <button className='border rounded-lg text-sm py-1 border-[#3b5445]  bg-[#13ec6a]/60 cursor-pointer relative' type='submit'
                onClick={handleSubmit}>
                
                {loading ? <ButtonSpinner loading={loading} /> :<div className='flex items-center justify-center gap-4'><FaPrint /><p>Publish Recipe</p></div> }
            </button>
            <button className='border rounded-lg text-sm py-1 border-[#3b5445] flex items-center justify-center gap-4 hover:bg-[#13ec6a]/30 cursor-pointer'>
                <FaPrint />
                <p>Save as Draft</p>
            </button>
            <button className='border rounded-lg text-sm py-1 border-[#3b5445] flex items-center justify-center gap-4 bg-[#1c2720] cursor-pointer' type='button'
                onClick={() => setFormData({})}>
                <ImCross className='' />
                <p>Clear</p>
            </button>

        </div>
    )
}


export default SaveCard