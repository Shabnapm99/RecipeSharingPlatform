import React, { useEffect, useState } from 'react'
import FilterComponent from './FilterComponent'
import { useSelector, useDispatch } from 'react-redux';
import { IoSearchSharp } from 'react-icons/io5';
import { MdKeyboardVoice } from "react-icons/md";
import RecipeCard from '../../components/Card/RecipeCard';
// import { useLoaderData } from 'react-router-dom';
import { app } from '../../utils/firebaseConfig';//import firebase configuration
import { getFirestore, collection, getDocs, } from 'firebase/firestore'
import { setRecipes } from '../../features/recipeSlice';

// Loader function

// const db = getFirestore(app);//Initialize Cloud Firestore and get a reference to the service

function RecipeList() {

  let dispatch = useDispatch();

  // Recipes from firbase firestore

  // const getData = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "recipes"));
  //     let recipes = querySnapshot.docs.map((doc) => ({
  //      uniqueId: doc.id,//the unique ID Firestore generated for this document ie one object.here Creates a new property called uniqueId in our object
  //       ...doc.data()//It copies all the fields from the document into the object ie includes the uniqueId key value pair with other data, so that we can use this unique id while deleting updating and all
  //     }));

  //     dispatch(setRecipes(recipes));

  //   } catch (error) {
  //     console.error(`Error occured : ${error.message}`);
  //   }

  // }

  const recipes = useSelector((state) => state.recipes.recipes);
  // let recipes = useLoaderData();
  const [fileterdRecipe, setFiletered] = useState(recipes);
  // useEffect(() => {
  //   getData()
  // }, [])

  useEffect(()=>{
    setFiletered(recipes);
  },[recipes])


  let [searchContent, setSearchContent] = useState('');
  let [recording, setRecording] = useState(false);


  //Speech recognition for voice searching

  function convertVoice() {
    const speechReco = window.SpeechRecognition || window.webkitSpeechRecognition;
    const reco = new speechReco();
    reco.lang = 'en-US';
    reco.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchContent(transcript);
      setFiletered(recipes.filter(recipe => recipe.cuisine.toLowerCase().includes(transcript.toLowerCase()) || recipe.name.toLowerCase().includes(transcript.toLowerCase()) || recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(transcript.toLowerCase()))));//some() loops through array and returns true if any of the element includes the value
    }
    reco.start();
  }

  //Search functionality

  function searchRecipe(event) {
    let value = event.target.value.toLowerCase().trim();
    setSearchContent(value);
    setFiletered(recipes.filter((recipe) =>
      recipe.cuisine.toLowerCase().includes(value) || recipe.name.toLowerCase().includes(value) || recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(value))));
  }

  return (
    <main className='bg-[#1c2720] p-3'>
      {/* search bar */}
      <section className='w-full'>
        <h2 className='text-xl font-bold text-white mb-4'>Search Recipes</h2>
        <div className='relative w-full md:w-[50%]'>
          <input placeholder='Searchfor recipes, ingredients or cusines...' className='bg-[#3c4f43] text-white text-sm rounded-2xl py-2 px-10 w-full border border-[#13ec13]' value={searchContent}
            onChange={searchRecipe} />
          <div className='absolute top-2 left-2 translate-y-0.5 text-white text-lg' ><IoSearchSharp /></div>
          <div className={`absolute top-2 right-2 text-white text-lg cursor-pointer rounded-full bg-[#1c2720] p-1.5 -translate-y-1`} onClick={convertVoice}>
            <MdKeyboardVoice />
          </div>
        </div>

      </section>
      <div className='flex flex-col md:flex-row gap-4 mt-6 justify-center'>

        {/* Filter section */}

        <section className='basis-1/4'>
          <FilterComponent />
        </section>

        {/* Recipe list section */}

        <section className='basis-3/4'>
          <div>
            <h4 className='text-gray-500 mb-3 text-[16px]'>Found {recipes?.length} Recipes</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {
                fileterdRecipe.map((recipe,index) => {
                  return (
                    <RecipeCard key={recipe?.uniqueId || index} recipe={recipe} />//use uniqueId if available, otherwise fallback to index.
                    
                  )
                })
              }

            </div>
          </div>

        </section>

      </div>


    </main>
  )
}

export default RecipeList