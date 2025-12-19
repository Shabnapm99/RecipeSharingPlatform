import {createSlice} from '@reduxjs/toolkit'

const recipeSlice = createSlice({
    name:'recipe',
    initialState:{
        recipes:[{}],

    },
    reducers:{

    }
})

export const {} = recipeSlice.actions; //export action creators

export default recipeSlice.reducer;