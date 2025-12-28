import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdAccessTime } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { LuChefHat } from "react-icons/lu";
import Ingredients from './Ingredients';
import { SiGooglegemini } from "react-icons/si";
import { IoMdArrowRoundForward } from "react-icons/io";
import InstructionCard from '../../components/Card/InstructionCard';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { FiShare2, FiPrinter } from "react-icons/fi";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc, getFirestore, deleteDoc } from 'firebase/firestore';
import { app } from '../../utils/firebaseConfig'
import { setSelectedRecipe, clearSelectedRecipe } from '../../features/recipeSlice';
import { setSavedRecipes, removeSavedRecipe } from '../../features/favoritesSlice'
import Spinner from '../../components/Card/Spinner';
import StopWatch from '../../components/Card/stopWatch';
import { GoogleGenerativeAI } from '@google/generative-ai'
import ButtonSpinner from '../../components/Card/ButtonSpinner';
import DeleteModal from '../../components/Card/DeleteModal';
import Modal from '../../components/Card/Modal';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function RecipeDetails() {

  //get URL params to fetch recipe details

  const urlParam = useParams();
  const id = urlParam.id;

  //Gemini API key

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAi = new GoogleGenerativeAI(apiKey);


  let dispatch = useDispatch();
  let user = useSelector((state) => state.users.authUser);
  let isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const recipes = useSelector((state) => state.recipes.recipes);
  const recipe = useSelector((state) => state.recipes.selectedRecipe);
  const [author, setAuthor] = useState('');
  const savedRecipes = useSelector((state) => state.favorites.savedRecipes);
  const [loading, setLoading] = useState(true);
  const [summary, setsummary] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  let navigate = useNavigate();

  // Check whether the recipe is in savedRecipes list or not. if present make isSaved as true
  const isSaved = savedRecipes.some((savedRecipe) => savedRecipe.uniqueId === recipe?.uniqueId);//this will return true if the recipe is in savedRecipeList
  const isAuthor = isLoggedIn && recipe?.userId === user?.id;//true only if any user is loggedIn and the user is the author


  //firebase function to get a single recipe

  useEffect(() => {

    const getRecipe = async () => {
      try {

        const docRef = doc(db, 'recipes', `${id}`); //create a refernce of document we want to get
        const getSnap = await getDoc(docRef);
        console.log(getSnap.data());

        dispatch(setSelectedRecipe({
          uniqueId: getSnap.id,
          ...getSnap.data()
        }))
      } catch (error) {
        console.error(`Error occured : ${error.message}`);
      } finally { setLoading(false) }

    }
    getRecipe();//call the function to get the recipe
    // setIsSaved(savedRecipes.some((recipe) => recipe.uniqueId === recipe?.uniqueId))

    return () => {
      dispatch(clearSelectedRecipe());//Anything returned from useEffect is a cleanup function.React calls this before the component unmounts or before running the effect next time (if dependencies changed).
    };//if we didn't clearup the selectedrecipe next time we are accessing another item, the previous item will show before ethe required one loads 

  }, [id])



  // gemini summary function

  async function getSummary() {
    setButtonLoading(true);
    let ingredients = recipe?.ingredients?.join('.');
    let instructions = recipe?.instructions?.join('.');

    const model = genAi.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const prompt = `Give me a summary of the following recipe in a clear and concise format.Dish:${recipe?.name},ingredients:${ingredients} and instructions:${instructions}.Keep the language simple and easy to understand.`;
    const result = await model.generateContent(prompt);
    const summary = result.response.text();
    setsummary(summary);
  }

  //summary button loading setter will run whenever summary state changes
  useEffect(() => {
    if (summary) setButtonLoading(false);
  }, [summary])


  return (

    <main className='bg-[#1c2720] p-3 relative'>
      <div className='flex justify-between'>
        {/* Back button */}
        <div className='my-5 md:my-8  md:mx-5 lg:mx-14 '>
          <Link to={'/recipes'}><button className='text-gray-400 font-medium flex gap-3 items-center text-sm m-3 hover:border hover:border-bg-white/10 py-1 px-2 rounded-lg' ><IoMdArrowRoundBack />Back to Recipes</button>
          </Link>
        </div>
        {isAuthor &&//only show delete and edit button if logged in user is the author
          <div className='flex gap-3 items-center '>
            <button className='border border-green-500/80 py-0.5 px-3 rounded text-green-600 font-medium hover:bg-[#13ec6a] hover:text-white'><span>Edit</span><span className='hidden lg:inline'> Recipe</span></button>
            <button className='border border-green-500/80 py-0.5 px-3 rounded text-green-600 font-medium hover:bg-[#13ec6a] hover:text-white'
              onClick={() => setShowModal(true)}><span>Delete</span><span className='hidden lg:inline'> Recipe</span> </button>
          </div>}

      </div>

      {/* Recipe details section */}
      {loading ? <Spinner loading={loading} /> :
        <section className='flex flex-col lg:flex-row gap-10 m-3 w-[85vw] mx-auto items-center lg:items-start'>
          <div className='w-[90vw] lg:w-[60vw]'>

            {/* Recipe section */}

            <div className='w-full aspect-square lg:aspect-3/2 rounded-xl relative'>
              <img src={recipe?.image} className='w-full h-full rounded-xl' />
              <div className='inset-0 bg-black/40 absolute top-0 left-0 rounded-xl'></div>
              <div className='flex items-center gap-2 absolute top-3.5 right-2'>
                <div className='rounded-full p-2 bg-black/65 text-white'>
                  {isSaved ? <FaHeart className='text-[#13ec6a] text-2xl' onClick={() => {
                    dispatch(removeSavedRecipe(recipe?.uniqueId))
                  }
                  } /> : <FaRegHeart onClick={() => {
                    isLoggedIn ? dispatch(setSavedRecipes(recipe)) : setShowLoginModal(true)
                  }} className='text-2xl' />}

                </div>
                <div className='rounded-full p-2 bg-black/65 text-white flex items-center gap-1'>
                  <FiShare2 className='text-2xl' />

                </div>
                <div className='rounded-full p-2 bg-black/65 text-white flex items-center gap-1'>
                  <FiPrinter className='text-2xl' />

                </div>

              </div>

            </div>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
              <h1 className="text-3xl md:text-4xl font-bold text-white/90 my-4">{recipe?.name}</h1>
              <div className='flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 h-6 px-1 rounded-2xl w-fit'>
                <FaStar className='text-yellow-500 text-sm' />
                <p className='text-xs font-medium text-yellow-500'>{recipe?.rating} ({recipe?.reviewCount})</p>
              </div>

            </div>

            <p className='text-gray-500 my-2 text-sm md:text-base'>{recipe?.description}</p>

            {/* Gemini Button */}
            <div className='hidden bg-linear-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-2 md:flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-2'>
              <div className='flex items-center gap-3'>
                <div className='bg-white/10 rounded-full p-2'>
                  <SiGooglegemini className='text-blue-300' />
                </div>
                <div className=''>
                  <p className='text-sm text-blue-100'>Want a quick overview?</p>
                  <p className='text-xs text-blue-200/70 hidden md:block'>Get a concise summary and chef tips powered by Gemini AI</p>
                </div>
              </div>
              <button className='text-xs text-white bg-blue-600 hover:bg-blue-500 font-medium rounded-full flex items-center gap-2 px-2 py-1.5  cursor-pointer relative'
                onClick={getSummary}>
                {buttonLoading ? <ButtonSpinner loading={buttonLoading} /> : <p>Summarize with Gemini</p>}
                <IoMdArrowRoundForward className='' />
              </button>
            </div>

            {/* Gemini button in small screens */}

            <button className='text-xs text-white bg-blue-600 hover:bg-blue-500 font-medium rounded-full md:hidden items-center gap-2 px-2 py-1.5 flex cursor-pointer relative '
              onClick={getSummary}>
              {buttonLoading ? <ButtonSpinner loading={buttonLoading} /> : <p>Summarize with Gemini</p>}
              <IoMdArrowRoundForward className='' />
            </button>
            {/* summary div */}
            {summary && <div className='text-white text-xs md:text-sm border border-purple-900 p-2 '>
              {summary}
            </div>}

            <div className='grid grid-cols-3 lg:grid-cols-5 gap-4 my-3 py-3'>
              <div className='border border-[#13ec6a]/30 bg-[#1c2a23] rounded-lg text-sm py-0.5 flex justify-center items-center text-white gap-1'>
                <MdAccessTime />
                <p >{recipe?.cookTimeMinutes} Mins</p>
              </div>
              <div className='border border-[#13ec6a]/30 bg-[#1c2a23] rounded-lg text-sm py-0.5 flex justify-center items-center text-white'>{recipe?.difficulty}</div>
              <div className='border border-[#13ec6a]/30 bg-[#1c2a23] rounded-lg text-sm py-0.5 flex justify-center items-center text-white'>{recipe?.cuisine}</div>
              <div className='border border-[#13ec6a]/30 bg-[#1c2a23] rounded-lg text-sm py-0.5 flex justify-center items-center text-white'>{recipe?.dietType}</div>
              <div className='border border-[#13ec6a]/30 bg-[#1c2a23] rounded-lg text-sm py-0.5 flex justify-center items-center text-white gap-1 col-span-2 md:col-span-1'>
                <LuChefHat />
                <p>{recipe?.author}</p>
              </div>
            </div>

            {/* Instructions */}
            <div className='m-3 py-5 border-b border-gray-600'>
              <div className='flex flex-col md:flex-row justify-between md:items-center'>
                <h3 className='text-2xl font-bold text-white mb-2'>Instructions</h3>
                <StopWatch />
              </div>
              <div className='py-4'>
                {
                  (recipe?.instructions || []).map((instruction, index) => {
                    {/* If instruction isn't load yet loop through empty array instead of looping through undefined which throw error and stop page from loading */ }
                    return <InstructionCard instruction={instruction} index={index} key={index} />
                  })
                }

              </div>
            </div>
          </div>

          {/* Ingredients list*/}
          <Ingredients ingredients={recipe?.ingredients} className='' />

        </section>
      }

      {/* Modals */}
      {showModal && <DeleteModal onClose={() => setShowModal(false)} recipe={recipe} />}
      {showLoginModal && <Modal onClose={() => setShowLoginModal(false)} text={"Login required to save recipes"} />}

    </main>
  )
}

export default RecipeDetails