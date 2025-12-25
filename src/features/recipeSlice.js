import {createSlice} from '@reduxjs/toolkit'

const recipeSlice = createSlice({
    name:'recipe',
    initialState:{
        recipes:[{}],
        selectedRecipe:{}
    },
    reducers:{

      setRecipes:(state,action)=>{
        state.recipes = action.payload;
      },
      setSelectedRecipe:(state,action)=>{
        state.selectedRecipe = action.payload
      },
      clearSelectedRecipe:(state)=>{
        state.selectedRecipe = null
      }

    }
})

export const {setRecipes,setSelectedRecipe,clearSelectedRecipe} = recipeSlice.actions; //export action creators

export default recipeSlice.reducer;