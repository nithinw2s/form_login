import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCardProducts = createAsyncThunk(
    'cardproducts/fetchedcardProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        // console.log("cardapi called data :",data );
        return data;
    }
);

const cardProductSlice = createSlice({
    name:'cardproducts',
    initialState: {
        items:[],
        status:'idle',
        error:null,
    },
    reducers: {},
    
    extraReducers:(builder)=>{
        builder
            .addCase(fetchCardProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCardProducts.fulfilled, (state, action) => {
                state.status= 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCardProducts.rejected, (state, action)=> {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export default cardProductSlice.reducer;