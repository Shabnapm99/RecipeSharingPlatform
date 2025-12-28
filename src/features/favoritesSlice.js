import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {

        savedRecipes: []
    },
    reducers: {
       
        setSavedRecipes: (state, action) =>{
            state.savedRecipes = action.payload
        } ,

        
        // removeSavedRecipe: (state, action) => {
        //     state.savedRecipes = state.savedRecipes.filter(recipe => recipe.uniqueId !== action.payload);
        // },
        clearSavedRecipes:(state)=>{
            state.savedRecipes = [];
        }

    }
})
export const { clearSavedRecipes,setSavedRecipes, } = favoritesSlice.actions;
export default favoritesSlice.reducer;