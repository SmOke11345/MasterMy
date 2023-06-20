import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProp, Items } from './types.ts';
import { GetLSCart } from '../../utils/GetLSCart.ts';

const { items } = GetLSCart();

const initialState: CartProp = {
    items,
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
                state.items.push({ ...action.payload, count: 1, favorite: false });
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
            if (state.items.length === 0) {
                state.totalPrice = 0;
            }
        },
    },
});

export const { addToCart, clearCart, removeItem, incItem, decItem } = cartSlice.actions;
export default cartSlice.reducer;
