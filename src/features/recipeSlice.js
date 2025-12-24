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
      }

    }
})

export const {setRecipes} = recipeSlice.actions; //export action creators

export default recipeSlice.reducer;