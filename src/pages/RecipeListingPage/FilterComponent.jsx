import React, { useEffect, useState } from 'react'
import { LuFilter } from "react-icons/lu";
import { useSelector } from 'react-redux';

function FilterComponent({ setFiletered }) {

    const [showFiltersDiv, setShowFiltersDiv] = useState(false);//state to toggle show filterDiv when clicked on filter icon on small screen
    const [cuisine, setCuisine] = useState("");
    const [difficulty, setDifficulty] = useState('');
    const [dietType, setDietType] = useState('');
    const [cookingTime, setCookingTime] = useState(60);
    const recipes = useSelector((state) => state.recipes.recipes);
    const filteredRecipes = recipes;//to make sure this is looping thorugh original full array while filterin
    
    //Filter function


    useEffect(() => {

        // setFiletered(filteredRecipes.filter((recipe) => recipe?.cuisine?.toLowerCase() === (cuisine.toLowerCase() || '') && recipe?.difficulty?.toLowerCase() === (difficulty.toLowerCase() || '')))

        let filtered = filteredRecipes.filter((recipe) => {
            const recipeCuisine = recipe?.cuisine?.toLowerCase();
            const recipeDifficulty = recipe?.difficulty?.toLowerCase();
            const recipeDietType = recipe?.dietType?.toLowerCase();
            const RecipeCookingTime = recipe?.cookTimeMinutes

            // apply cuisine filter only if selected
            if (cuisine && recipeCuisine !== cuisine) return false;

            if (difficulty && recipeDifficulty !== difficulty) return false;

            if (dietType && recipeDietType !== dietType) return false;

            if (cookingTime && RecipeCookingTime > cookingTime) return false;

            return true;

        })
        setFiletered(filtered);

    }, [cuisine, difficulty, dietType, cookingTime, filteredRecipes])

    const clearFilters = () => {
        setCuisine('');
        setDifficulty('');
        setDietType('');
        setCookingTime(60);
        setFiletered(recipes); // immediately reset filtered list
    }

    return (
        <div className=' text-white bg-[#364f3f] rounded p-3 flex flex-col gap-3'>
            <div className={`flex justify-between items-center md:border-b md:pb-3 ${showFiltersDiv && 'border-b pb-3'}`}>
                <div className='flex justify-center items-center gap-2'>
                    <LuFilter />
                    <h3 className=''>Filters</h3>
                </div>
                {/* Filter Icon on small screen */}
                <LuFilter className='text-sm md:hidden' onClick={() => setShowFiltersDiv(!showFiltersDiv)} />
            </div>
            <div className={`${showFiltersDiv ? 'flex' : 'hidden'} md:flex flex-col gap-3 `}>
                <div className='flex flex-col gap-2 text-sm'>
                    <label htmlFor='cuisine'>Cuisine</label>
                    <select className='bg-[#1c2720] block p-1.5 rounded' value={cuisine} onChange={(e) => { setCuisine(e.target.value) }}>
                        <option value=''>All cuisines</option>
                        <option value='italian'>Italian</option>
                        <option value='american'>American</option>
                        <option value='asian'>Asian</option>
                        <option value='mexican'>Mexican</option>
                        {/* <option value='mexican'>Mexican</option> */}
                        <option value='mediterranean'>Mediterranean</option>
                        <option value='pakistani'>Pakistani</option>
                        <option value='japanese'>Japanese</option>
                        <option value='moroccan'>Moroccan</option>
                        <option value='greek'>Greek</option>
                        <option value='korean'>Korean</option>
                        <option value='thai'>Thai</option>
                        <option value='indian'>Indian</option>
                        <option value='turkish'>Turkish</option>
                        <option value='russian'>Russian</option>
                        <option value='lebanese'>Lebanese</option>
                        <option value='brazilian'>Brazilian</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2 text-sm'>
                    <p>Difficulty</p>
                    <div className='flex gap-2 items-center'>
                        <input type='radio' className='cursor-pointer accent-[#13ec6a]' name='difficulty' id='easy' onChange={(e) => setDifficulty(e.target.value)} value={'easy'} />
                        <label htmlFor='easy'>Easy(under 30 mins)</label>

                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type='radio' className='cursor-pointer accent-[#13ec6a]' name='difficulty' id='medium' onChange={(e) => setDifficulty(e.target.value)} value={'medium'} />
                        <label htmlFor='medium'>Medium</label>

                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type='radio' className='cursor-pointer accent-[#13ec6a]' name='difficulty' id='hard' onChange={(e) => setDifficulty(e.target.value)} value={'hard'} />
                        <label htmlFor='hard'>Hard</label>

                    </div>

                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm '>DIET TYPE</p>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className={`rounded-2xl text-sm py-0.5  flex justify-center items-center cursor-pointer ${dietType==='vegetarian'? 'bg-[#13ec6a] border-none':'border border-[#1c2720]'}`}
                            onClick={(e) =>setDietType('vegetarian')}>Vegetarian</div>
                        <div className={`rounded-2xl text-sm py-0.5 flex justify-center items-center cursor-pointer ${dietType === 'non-vegetarian'?'bg-[#13ec6a] border-none':'border border-[#1c2720]'}`} 
                        onClick={(e) => setDietType('non-vegetarian')} >Non-veg</div>
                        {/* <div className='border border-[#1c2720] rounded-2xl text-sm py-0.5 active:bg-[#13ec6a] flex justify-center items-center' onClick={(e) => setDietType(e.target.value)}>keto</div>
                        <div className='border border-[#1c2720] rounded-2xl text-sm py-0.5 active:bg-[#13ec6a] flex justify-center items-center' onClick={(e) => setDietType(e.target.value)}>Vegan</div> */}
                    </div>
                </div>
                <div className='flex flex-col gap-2 text-sm'>
                    <p>Cooking Time (60 max)</p>
                    {/* Progress Bar */}
                    <div className="flex w-full h-3.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        {/* <div className={`flex flex-col justify-center rounded-full overflow-hidden bg-[#13ec6a] text-xs text-white text-center whitespace-nowrap transition duration-500 w-[${cookingTime}%]`}>{cookingTime}</div> */}
                        <input type="range" min="5" max="60" step="5" value={cookingTime} placeholder={cookingTime}
                            onChange={(e) => setCookingTime(Number(e.target.value))} className="w-full cursor-pointer accent-[#13ec6a]"
                        />
                    </div>

                </div>
                <button className='border border-[#13ec6a] rounded-lg text-[#13ec6a] hover:text-black hover:bg-[#b3f4cd]'
                    onClick={clearFilters}>Clear All Filters</button>
            </div>


        </div>
    )
}

export default FilterComponent