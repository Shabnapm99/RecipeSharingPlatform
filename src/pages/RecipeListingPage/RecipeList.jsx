import React, { useEffect, useState } from 'react'
import FilterComponent from './FilterComponent'
import { useSelector } from 'react-redux';
import { IoSearchSharp } from 'react-icons/io5';
import { MdKeyboardVoice } from "react-icons/md";
import RecipeCard from '../../components/Card/RecipeCard';

function RecipeList() {

  const recipes = useSelector((state) => state.recipes.recipes);
  const [fileterdRecipe, setFiletered] = useState(recipes);
  let [searchContent, setSearchContent] = useState('');
  let [recording, setRecording] = useState(false);

  useEffect(() => {
    setFiletered(recipes);
  }, [recipes]);

  //Speech recognition for voice searching

  function convertVoice() {
    const speechReco = window.SpeechRecognition || window.webkitSpeechRecognition;
    const reco = new speechReco();
    reco.lang = 'en-US';
    reco.onstart = ()=>setRecording(true);
    reco.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchContent(transcript);
      setFiletered(recipes.filter(recipe => recipe.cuisine.toLowerCase().includes(transcript.toLowerCase()) || recipe.name.toLowerCase().includes(transcript.toLowerCase()) || recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(transcript.toLowerCase()))));//some() loops through array and returns true if any of the element includes the value
    }
    reco.onend = ()=>setRecording(false);
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
          <div className={`absolute top-2 right-2 text-white text-lg cursor-pointer rounded-full bg-[#1c2720] p-1.5 -translate-y-1 active:text-emerald-500 transition-all duration-300 ease-in-out ${recording?'ring-1 ring-offset-2 ring-[#13ec13] animate-pulse':'outline-none'}`} onClick={convertVoice}>
            <MdKeyboardVoice />
          </div>
        </div>

      </section>
      <div className='flex flex-col md:flex-row gap-4 mt-6 justify-center'>

        {/* Filter section */}

        <section className='basis-1/4'>
          <FilterComponent fileterdRecipe={fileterdRecipe} setFiletered={setFiletered} />
        </section>

        {/* Recipe list section */}

        <section className='basis-3/4 relative'>
          <div>
            <h4 className='text-gray-500 mb-3 text-[16px]'>Found {fileterdRecipe?.length} Recipes</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {
                fileterdRecipe.map((recipe, index) => {
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