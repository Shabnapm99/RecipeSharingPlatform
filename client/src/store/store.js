import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from '../features/recipeSlice'
import userReducer from '../features/userSlice'
import favoritesReducer from '../features/favoritesSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['users']//to specify what all slice to be persisted
}

const persistedReducer = persistReducer(persistConfig, userReducer)


export const store = configureStore({
    reducer: {
        recipes: recipeReducer,
        users: persistedReducer,
        favorites: favoritesReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

export const persistor = persistStore(store);