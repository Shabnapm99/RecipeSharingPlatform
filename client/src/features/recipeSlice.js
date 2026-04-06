import { createSlice } from '@reduxjs/toolkit'

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    recipes: [],
    selectedRecipe: null,
    isEditing: false,
    uniqueId: null
  },
  reducers: {

    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setSelectedRecipe: (state, action) => {
      state.selectedRecipe = action.payload
    },
    clearSelectedRecipe: (state) => {
      state.selectedRecipe = null
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload.boolean;
      state.uniqueId = action.payload.id;
    },
    removeRecipe: (state, action) => {
      let recipeId = action.payload
      state.recipes = state.recipes.filter((recipe) => recipe._id != recipeId)
    }
  }
})

export const { setRecipes, setSelectedRecipe, clearSelectedRecipe, setIsEditing, removeRecipe } = recipeSlice.actions; //export action creators

export default recipeSlice.reducer;