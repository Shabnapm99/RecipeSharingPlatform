import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [{}],
        isLoggedIn: false,
        authUser: null
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
        setAuthUser: (state, action) => {
            state.authUser = action.payload
        }

    }
})
export const { setIsLoggedIn, setAuthUser } = userSlice.actions;
export default userSlice.reducer;