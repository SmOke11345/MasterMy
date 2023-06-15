import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProp, Items } from './types.ts';

const initialState: CartProp = {
    items: [],
    totalPrice: 0,
};
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Items[]>) => {
            state.items.push(...action.payload);
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
