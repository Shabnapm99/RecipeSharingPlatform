import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SaveCard from './SaveCard';
import Ingredients from './Ingredients';
import Steps from './Steps';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { useSelector } from 'react-redux';

function AddRecipe() {
  let user = useSelector((state) => state.users.authUser);
  let isEditing = useSelector((state) => state.recipes.isEditing);
  let id = useSelector((state) => state.recipes.uniqueId);
  let recipes = useSelector((state) => state.recipes.recipes);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cookingTime, setCookingTime] = useState(5);
  const [difficulty, setDifficulty] = useState('Easy');
  const [author, setAuthor] = useState('');
  const [dietType, setDietType] = useState('Vegetarian');
  const [cuisine, setCuisine] = useState('Italian');
  const [imageUrl, setImageUrl] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [formData, setFormData] = useState({});
  const [showErrorPara, setShowErrorPara] = useState(false);

  useEffect(() => {

    setFormData({
      name: title,
      author: author,
      description: description,
      cuisine: cuisine,
      dietType: dietType,
      difficulty: difficulty,
      image: imageUrl,
      cookTimeMinutes: cookingTime,
      instructions: instructions,
      ingredients: ingredients
    })

  }, [title, description, cookingTime, difficulty, author, dietType, cuisine, imageUrl, ingredients, instructions])

  useEffect(() => {

    setAuthor(user?.name);

  }, [user]);//to set the author name as current user

  //function to get the recipe details to update
  useEffect(() => {
    if (isEditing) {
      let editingRecipe = recipes.find((recipe) => recipe?.uniqueId === id)
      console.log(`editing... recipe is ${editingRecipe}`);
      setTitle(editingRecipe?.name || '');
      setDescription(editingRecipe?.description || '');
      setDifficulty(editingRecipe?.difficulty || 'Easy')
      setCookingTime(Number(editingRecipe?.cookTimeMinutes) || 5)
      setImageUrl(editingRecipe?.image || '')
      setDietType(editingRecipe?.dietType || 'Vegetarian')
      setCuisine(editingRecipe?.cuisine || 'Italian')
      setIngredients(editingRecipe?.ingredients || []);
      setInstructions(editingRecipe?.instructions || []);

    }
  }, [isEditing, id]);

  return (
    <main className='bg-[#1c2720] py-9 flex flex-col items-center'>
      <section className='w-[80%]'>
        {/* header */}
        <div className='flex gap-4 items-center'>
          <Link to={'/'}><button className='hidden text-white/30 md:flex gap-2 item-center justify-center hover:border hover:rounded-lg px-2'>
            <div className='flex items-center'><FaArrowLeft /></div>
            <p className=''>Back</p>
          </button>
          </Link>
          <div >
            <h1 className='text-white text-3xl font-bold'>{isEditing?<p>Edit Recipe</p>:<p>Add New Recipe</p>}</h1>
            <p className='mt-1 text-white/30'>Share your delicious creation with the community</p>

          </div>

        </div>
        {showErrorPara && <p className='text-red-500 text-sm'>*Please provide all details</p>}
      </section>

      <section className='w-[80%] mx-auto flex flex-col lg:flex-row lg:gap-3'>

        {/*information */}
        <div className=' w-full lg:w-[75%]'>
          <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217]'>
            {/* Basic information */}
            <div className='flex flex-col text-white gap-2'>
              <div className=''>Basic information</div>
              {/* input recipe title */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='title' className='font-medium text-[#13ec6a]/50'>Recipe title</label>
                <input type='text' id='title' placeholder='Enter your recipe title' className='border border-[#3b5445] rounded p-2 bg-[#1c2720] text-sm' value={title} required onChange={(e) => setTitle(e.target.value)} />
              </div>

              {/* Description input */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='description' className='text-[#13ec6a]/50 font-medium'>Description</label>
                <textarea type='text' id='description' placeholder='Enter Description' className='border border-[#3b5445] rounded p-2 bg-[#1c2720] text-sm' minLength={5} maxLength={200} required value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              {/* Other inputs */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='flex flex-col gap-1'>
                  <label className='text-[#13ec6a]/50 font-medium'>Cooking Time(Mins)</label>
                  <input type='number' min={5} max={60} placeholder='5' className='border border-[#3b5445] rounded px-2 py-1.5 bg-[#1c2720] text-sm' required value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='text-[#13ec6a]/50 font-medium'>Difficulty</label>
                  <select className='bg-[#1c2720] block p-1.5 rounded border border-[#3b5445] text-sm' required value={difficulty} onChange={(e) => setDifficulty(e.target.value)} >
                    <option value={'Easy'}  >Easy</option>
                    <option value={'Hard'}>Hard</option>
                    <option value={'Medium'}>Medium</option>
                  </select>
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='text-[#13ec6a]/50 font-medium'>Diet type</label>
                  <select className='bg-[#1c2720] block p-1.5 rounded border border-[#3b5445] text-sm' required value={dietType} onChange={(e) => setDietType(e.target.value)}>
                    <option value={'Vegetarian'}>Vegetarian</option>
                    <option value={"Vegan"}>Vegan</option>
                    <option value={"Keto"}>Keto</option>
                    <option value={'Non-vegetarian'}>Non-veg</option>
                  </select>
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='text-[#13ec6a]/50 font-medium'>Cuisine</label>
                  <select className='bg-[#1c2720] block p-1.5 rounded border border-[#3b5445] text-sm' required value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
                    <option value={'Italian'}>Italian</option>
                    <option value={'American'}>American</option>
                    <option value={'Asian'}>Asian</option>
                    <option value={'Mexican'}>Mexican</option>
                    <option value={'Mediterranean'}>Mediterranean</option>
                    <option value={'Pakistani'}>Pakistani</option>
                    <option value={'Japanese'}>Japanese</option>
                    <option value={'Moroccan'}>Moroccan</option>
                    <option value={'Greek'}>Greek</option>
                    <option value={'Korean'}>Korean</option>
                    <option value={'Thai'}>Thai</option>
                    <option value={'Indian'}>Indian</option>
                    <option value={'Turkish'}>Turkish</option>
                    <option value={'Russian'}>Russian</option>
                    <option value={'Lebanese'}>Lebanese</option>
                    <option value={'Brazilian'}>Brazilian</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Recipe image */}
          <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217]'>
            <div className='flex flex-col text-white'>
              {/* image url */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='title' className='text-[#13ec6a]/50 font-medium'>Image URL</label>
                <input type='text' id='title' placeholder='Enter url' className='border border-[#3b5445] rounded p-2 bg-[#1c2720]' required value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
              </div>
              <div className='flex gap-2 my-2'>
                <input type='file' className='border border-[#3b5445] rounded w-35 px-2 py-1 bg-[#1c2720]' />
                <p>or paste URL above</p>
              </div>
            </div>
          </div>

          {/* Ingredients */}

          <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217]'>
            <Ingredients setIngredients={setIngredients} ingredients={ingredients} />
          </div>

          {/* Instructions */}

          <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217]'>
            <Steps setInstructions={setInstructions} instructions={instructions} />
          </div>
        </div>

        {/* preview and save */}
        <div className='flex flex-col lg:gap-2 flex-1'>
          {/* PreviewCard  */}
          <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217] text-white/90 flex flex-col gap-3 sticky top-16 right-0'>
            <div className='flex gap-3 items-center font-semibold'>
              <MdOutlineRemoveRedEye />
              <h3>Preview</h3>

            </div>
            <div>
              <h2 className='font-semibold'>{title || "Recipe Name"}</h2>
              <p className=''>{description || "Description"}</p>
            </div>
            <div className='flex gap-4'>
              <p>{cookingTime || "5"} Mins</p>
              <p>{difficulty || "Easy"}</p>
            </div>

          </div>

          <SaveCard recipe={formData} setFormData={setFormData} setShowErrorPara={setShowErrorPara} />

        </div>
      </section>
    </main>
  )
}

export default AddRecipe