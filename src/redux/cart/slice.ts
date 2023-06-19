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
        addToCart: (state, action: PayloadAction<Items>) => {
            // ищем подобный элемент в массиве
            const findItem = state.items.find((item) => item.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }

            state.totalPrice += action.payload.price;
        },
        decItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find((item) => item.id === action.payload);
            if (findItem) {
                findItem.count--;
            }
        },
        incItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find((item) => item.id === action.payload);
            if (findItem) {
                findItem.count++;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addToCart, clearCart, removeItem, incItem, decItem } = cartSlice.actions;
export default cartSlice.reducer;
