import {configureStore} from '@reduxjs/toolkit'
import recipeReducer from '../features/recipeSlice'
import userReducer from '../features/userSlice'
import favoritesReducer from '../features/favoritesSlice'

export const store = configureStore({
    reducer:{
        recipes:recipeReducer,
        users:userReducer,
        favorites:favoritesReducer
    }
})