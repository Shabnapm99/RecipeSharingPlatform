import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {

        savedRecipes: []
    },
    reducers: {
       
        setSavedRecipes: (state, action) => {
            let newSavedRecipe = action.payload;
            let duplicate = state.savedRecipes.some((duplicate)=>duplicate.uniqueId===newSavedRecipe.uniqueId)
            if(!duplicate){state.savedRecipes = [...state.savedRecipes, newSavedRecipe];}

        },
        removeSavedRecipe: (state, action) => {
            state.savedRecipes = state.savedRecipes.filter(recipe => recipe.uniqueId !== action.payload);
        },
        clearSavedRecipes:(state)=>{
            state.savedRecipes = [];
        }

    }
})
export const { clearSavedRecipes,setSavedRecipes,removeSavedRecipe } = favoritesSlice.actions;
export default favoritesSlice.reducer;