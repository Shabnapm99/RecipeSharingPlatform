import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa";

function Ingredients({ setIngredients, ingredients }) {

    let [ingredient, setIngredient] = useState('');

    function addIngredient() {
        if (!ingredient.trim()) return;
        setIngredients([...ingredients, ingredient]);
        setIngredient('');

    }

    function removeIngredient(i) {
        setIngredients(ingredients.filter((item, index) => index !== i));//remove ingredient in the index
    }
    return (
        <div className='flex flex-col gap-4'>
            <p className='text-white p-2' htmlFor='ingredients'>Ingredients</p>
            <div className='relative'>
                <input type='text' className='border border-[#3b5445] rounded p-2 bg-[#1c2720] w-full text-gray-400 placeholder:text-gray-400' placeholder='Type Ingredient ' value={ingredient} onChange={(e) => setIngredient(e.target.value)} />
            </div>
            {
                ingredients.map((item, index) => {
                    return (
                        <div className='relative' key={index}>
                            <input type='text' className='border border-[#3b5445] rounded p-2 bg-[#1c2720] w-full text-gray-400 placeholder:text-gray-400' placeholder='Ingredient 1' value={item} readOnly />
                            <ImCross className='text-sm text-[#13ec6a]/50 absolute top-3.5 right-3.5 hover:text-[#13ec6a]/30 cursor-pointer' onClick={() => removeIngredient(index)} />
                        </div>
                    )
                })
            }

            <button className='flex justify-center gap-5 items-center bg-linear-to-r from-[#13ec6a]/50 to-[#13ec6a]/90 px-2 py-1.5 rounded text-white cursor-pointer hover:bg-[#13ac6a]/60'
                onClick={addIngredient}>
                <FaPlus />
                <p>Add Ingredient</p>
            </button>
        </div>
    )
}

export default Ingredients