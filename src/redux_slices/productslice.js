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
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
        editProduct: (state, action) => {
            const { id, updatedProduct } = action.payload;
            const index = state.items.findIndex(product => product.id === id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...updatedProduct };
            }
        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter(product => product.id !== action.payload);
        },
    },
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

export const { addProduct, editProduct, deleteProduct } = productSlice.actions

// export const { products } = productSlice.reducer;


export default productSlice.reducer;