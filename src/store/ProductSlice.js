import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    "products": [],
}



// const fetchProducts = createAsyncThunk('product/fetchProducts',()=> {
//     return getProducts()
//     .then((products)=> {
//         return products;
//     })
// })



const productSlice = createSlice({
    name:'product',
    initialState,
    reducers: {
        init: (state,action) => {
            console.log(action);
            state.products = action.payload.products
        }
    }
})


export const {init} = productSlice.actions;
export default productSlice.reducer;