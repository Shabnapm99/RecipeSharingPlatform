import {createSlice} from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name:'favorites',
    initialState:{
        favoriteCount:null,
        isFavorite:false,
    },
    reducers:{
        incrementCount:(state)=>{
            state.favoriteCount += 1
        },
        decrementCount:(state)=>{
            if(state.favoriteCount>0){state.favoriteCount -= 1}
        },
        setIsFavorite:(state,action)=>{
            state.isFavorite = action.payload
        }

    }
})
export const{} = favoritesSlice.actions;
export default favoritesSlice.reducer;