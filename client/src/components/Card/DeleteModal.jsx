import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import ButtonSpinner from './ButtonSpinner';
import { useNavigate } from 'react-router-dom';
import { deleteRecipe } from '../../services/recipeServices.js'
import { removeRecipe } from '../../features/recipeSlice.js';
import { useDispatch } from 'react-redux';

function DeleteModal({ onClose, recipe }) {

    const [deleteLoading, setDeleteLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const deleteARecipe = async () => {
        try {
            setDeleteLoading(true);
            await deleteRecipe(recipe._id);
            dispatch(removeRecipe(recipe._id));// remove from redux store to update UI immediately after delteing
            navigate('/recipes');
        } catch (error) {
            console.log(error);
        } finally {
            setDeleteLoading(false);
        }
    };

    return (
        <div className='fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn'>

            <div className='relative w-[90%] sm:w-[70%] md:w-[40%] 
                            bg-[#1c2720] rounded-3xl 
                            px-6 py-8 
                            shadow-2xl 
                            flex flex-col items-center gap-6 
                            animate-scaleIn'>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className='absolute top-4 right-5 text-gray-400 
                               hover:text-red-400 
                               transition duration-200'
                >
                    <ImCross />
                </button>

                {/* Warning Text */}
                <p className='text-gray-300 text-center text-sm md:text-base'>
                    Are you sure you want to delete this recipe?
                </p>

                {/* Action Buttons */}
                <div className='flex gap-4'>

                    {/* Cancel */}
                    <button
                        onClick={onClose}
                        className='px-4 py-2 rounded-lg 
                                   border border-gray-600 
                                   text-gray-300 
                                   hover:bg-gray-700 
                                   transition duration-300'
                    >
                        Cancel
                    </button>

                    {/* Delete */}
                    <button
                        onClick={deleteARecipe}
                        disabled={deleteLoading}
                        className='px-5 py-2 rounded-lg 
                                   bg-red-600 
                                   text-white font-semibold 
                                   hover:bg-red-500 
                                   hover:scale-105 
                                   active:scale-95 
                                   transition-all duration-300 
                                   flex items-center justify-center min-w-22.5'
                    >
                        {deleteLoading
                            ? <ButtonSpinner loading={deleteLoading} />
                            : "Delete"}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default DeleteModal