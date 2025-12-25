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
      }

    }
})

export const {setRecipes,setSelectedRecipe} = recipeSlice.actions; //export action creators

export default recipeSlice.reducer;