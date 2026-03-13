import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";
import { FaPrint } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setIsEditing, setRecipes } from '../../features/recipeSlice'
import { useNavigate } from 'react-router-dom';
import ButtonSpinner from '../../components/Card/ButtonSpinner';
import { updateRecipe, addrecipe } from '../../services/recipeServices';


function SaveCard({ recipe, setFormData, setShowErrorPara }) {

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let recipes = useSelector((state) => state.recipes.recipes);
    let user = useSelector((state) => state.users.authUser);
    let isEditing = useSelector((state) => state.recipes.isEditing);
    let id = useSelector((state) => state.recipes.uniqueId);
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("i am called")
        if (!recipe?.title?.trim() || !recipe?.image?.trim() || !recipe?.description?.trim()) return setShowErrorPara(true);
        console.log(recipe);

        const addData = async () => {

            let recipeData = {

                title: recipe.title,
                image: recipe.image,
                description: recipe.description,
                cuisine: recipe.cuisine,
                dietType: recipe.dietType,
                difficulty: recipe.difficulty,
                cookingTime: recipe.cookingTime,
                ingredients: recipe.ingredients,
                instructions: recipe.instructions

            }
            try {
                setLoading(true);
                if (isEditing) {
                    //update recipe
                    // const docRef = doc(db, 'recipes', id);//id is from redux
                    // await updateDoc(docRef, recipeDate);

                    let response = await updateRecipe(id, recipeData);

                    const updatedRecipe = response.data.recipe;
                    dispatch(setRecipes(recipes.map((recipe) => recipe._id === id ? updatedRecipe : recipe)))



                } else {
                    //add recipe


                    let response = await addrecipe({ ...recipeData, rating: 4.9, reviewCount: 20 })
                    const newRecipe = response.data.recipe;
                    dispatch(setRecipes([...recipes, newRecipe]))

                }
                setFormData({});//clear the input fields
                navigate(isEditing ? `/recipes/${id}` : '/recipes');//navigate to details page for update recipe,and to listing page for add new recipe

            } catch (error) {
                console.log(`Error || ${error}`)
            } finally {
                setLoading(false);
                dispatch(setIsEditing({
                    isEditing: false,
                    uniqueId: null
                }))
            }
        }

        addData();
    }

    return (
        <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217] text-white/90 flex flex-col gap-3'>

            <button className='border rounded-lg text-sm py-1 border-[#3b5445]  bg-[#13ec6a]/60 cursor-pointer relative flex items-center justify-center gap-4' type='submit'
                onClick={handleSubmit}>
                <FaPrint /><p>Publish Recipe</p>

                {loading && <ButtonSpinner loading={loading} />}
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