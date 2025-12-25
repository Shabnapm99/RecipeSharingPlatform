import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{
        users:[{}],
        isLoggedIn:true,
    },
    reducers:{

    }
})
export const{} = userSlice.actions;
export default userSlice.reducer;