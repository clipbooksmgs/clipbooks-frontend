import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    "userData": {}
}



const loggedInUserSlice = createSlice({
    name:'loggedInUser',
    initialState,
    reducers:{
        loggedIn: (state, action) => {
            state.userData = action.payload.userData
        }
    }
})


export default loggedInUserSlice.reducer;
export const {loggedIn} = loggedInUserSlice.actions;