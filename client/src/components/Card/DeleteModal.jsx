import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import ButtonSpinner from './ButtonSpinner';
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import { app } from '../../utils/firebaseConfig';
import { useNavigate } from 'react-router-dom';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function DeleteModal({ onClose, recipe }) {

    const [deleteLoading, setDeleteLoading] = useState(false);
    let navigate = useNavigate();

    // Delete Recipe Function

    const deleteRecipe = async () => {
        try {

            setDeleteLoading(true);
            await (deleteDoc(doc(db, 'recipes', recipe?.uniqueId)));
            navigate('/recipes');
        } catch (error) {
            console.log(error)
        } finally { setDeleteLoading(false) }
    }
    return (
        <>
            {/* Modal */
                <div className='fixed inset-0 bg-black/80 flex justify-center items-center z-100'>

                    <div className='w-[75%] md:w-[40%] h-[20%] lg:h-[30%] bg-white/90 rounded flex flex-col gap-4 justify-center items-center relative' >
                        <button className='absolute top-3 right-3 p-2 hover:border rounded border-gray-500 text-[#13ec6a]/90 hover:text-red-700' onClick={onClose}><ImCross /></button>
                        <p className='pt-3 text-sm md:text-base'>Are you sure to delete the Recipe?</p>

                        <button className='bg-red-800/90 rounded px-2 py-1 text-white relative' onClick={deleteRecipe}>
                            {deleteLoading ? <ButtonSpinner loading={deleteLoading} /> : <p>Delete</p>}</button>

                    </div>

                </div>
            }
        </>
    )
}

export default DeleteModal