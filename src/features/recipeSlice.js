import {createSlice} from '@reduxjs/toolkit'

const recipeSlice = createSlice({
    name:'recipe',
    initialState:{
        recipes:[{}],
        selectedRecipe:{},
        isEditing:false,
        uniqueId : null
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
      },
      setIsEditing:(state,action)=>{
            state.isEditing = action.payload.boolean;
            state.uniqueId = action.payload.id;
        },
      
    }
})

export const {setRecipes,setSelectedRecipe,clearSelectedRecipe,setIsEditing,editRecipe} = recipeSlice.actions; //export action creators

export default recipeSlice.reducer;