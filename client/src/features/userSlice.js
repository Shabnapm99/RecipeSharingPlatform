import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [{}],
        isLoggedIn: false,
        authUser: null,
        authAdmin:false,
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
        setAuthUser: (state, action) => {
            state.authUser = action.payload
        },
        setAuthAdmin:(state,action)=>{
            state.authAdmin = action.payload
        }

    }
})
export const { setIsLoggedIn, setAuthUser, setAuthAdmin } = userSlice.actions;
export default userSlice.reducer;