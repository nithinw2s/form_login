import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'products/fetchedProducts',
    async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data.products;
    }
);

const productSlice = createSlice({
    name:'products',
    initialState: {
        items:[],
        status:'idle',
        error:null,
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status= 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action)=> {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;