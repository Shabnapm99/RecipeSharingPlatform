import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SaveCard from './SaveCard';
import Ingredients from './Ingredients';
import Steps from './Steps';
import Modal from '../../components/Card/Modal';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

function AddRecipe() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cookingTime, setCookingTime] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');
  const [author, setAuthor] = useState('');
  const [dietType, setDietType] = useState('vegetarian');
  const [cuisine, setCuisine] = useState('italian');
  const [imageUrl, setImageUrl] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [formData, setFormData] = useState({})


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
            <h1 className='text-white text-3xl font-bold'>Add New Recipe</h1>
            <p className='mt-1 text-white/30'>Share your delicious creation with the community</p>

          </div>

        </div>
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

              {/* Author name */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='title' className='font-medium text-[#13ec6a]/50'>Author</label>
                <input type='text' id='title' placeholder='Enter author name' className='border border-[#3b5445] rounded p-2 bg-[#1c2720] text-sm' required value={author} onChange={(e) => setAuthor(e.target.value)} />
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
                    <option value={'easy'}  >Easy</option>
                    <option value={'hard'}>Hard</option>
                    <option value={'medium'}>Medium</option>
                  </select>
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='text-[#13ec6a]/50 font-medium'>Diet type</label>
                  <select className='bg-[#1c2720] block p-1.5 rounded border border-[#3b5445] text-sm' required value={dietType} onChange={(e) => setDietType(e.target.value)}>
                    <option value={'vegetarian'}>Vegetarian</option>
                    <option value={"vegan"}>Vegan</option>
                    <option value={"keto"}>Keto</option>
                    <option value={'non-vegetarian'}>Non-veg</option>
                  </select>
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='text-[#13ec6a]/50 font-medium'>Cuisine</label>
                  <select className='bg-[#1c2720] block p-1.5 rounded border border-[#3b5445] text-sm' required value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
                    <option value={'italian'}>Italian</option>
                    <option value={'american'}>American</option>
                    <option value={'asian'}>Asian</option>
                    <option value={'mexican'}>Mexican</option>
                    <option value={'mediterranean'}>Mediterranean</option>
                    <option value={'pakistani'}>Pakistani</option>
                    <option value={'japanese'}>Japanese</option>
                    <option value={'moroccan'}>Moroccan</option>
                    <option value={'greek'}>Greek</option>
                    <option value={'korean'}>Korean</option>
                    <option value={'thai'}>Thai</option>
                    <option value={'indian'}>Indian</option>
                    <option value={'turkish'}>Turkish</option>
                    <option value={'russian'}>Russian</option>
                    <option value={'lebanese'}>Lebanese</option>
                    <option value={'brazilian'}>Brazilian</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Recipe image */}
          <div className='border border-[#3b5445] p-5 rounded-2xl my-4 bg-[#102217]'>
            <div className='flex flex-col text-white'>
              {/* <div className=''>Basic information</div> */}
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

          <SaveCard recipe={formData} setFormData={setFormData} />

        </div>

      </section>

    </main>
  )
}

export default AddRecipe