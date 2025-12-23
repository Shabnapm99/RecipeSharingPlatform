import {createSlice} from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name:'favorites',
    initialState:{
        favoriteCount:null,
    },
    reducers:{

    }
})
export const{} = favoritesSlice.actions;
export default favoritesSlice.reducer;