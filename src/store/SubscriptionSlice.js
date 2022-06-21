import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    "subscriptionDetails": {},
}


const subscriptionSlice = createSlice({
    name:'subscription',
    initialState,
    reducers: {
        created: (state,action) => {
            console.log(action.payload);
            state.subscriptionDetails = action.payload.subscriptionDetails
        }
    }
})


export const {created} = subscriptionSlice.actions;
export default subscriptionSlice.reducer;