import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './asyncThunk.ts';
import { CatchProp, StatusName } from './types.ts';

const initialState: CatchProp = {
    items: [],
    status: StatusName.LOADING,
};

const fetchProductsSlice = createSlice({
    name: 'fetchProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = StatusName.LOADING;
            state.items = [];
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = StatusName.SUCCESS;
            state.items = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.status = StatusName.ERROR;
            state.items = [];
        });
    },
});

export default fetchProductsSlice.reducer;
