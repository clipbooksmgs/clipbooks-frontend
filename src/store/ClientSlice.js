import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    "client": {},
}


const clientSlice = createSlice({
    name:'client',
    initialState,
    reducers: {
        clientCreated: (state,action) => {
            state.client = action.payload.client
        }
    }
})


export const {clientCreated} = clientSlice.actions;
export default clientSlice.reducer;


