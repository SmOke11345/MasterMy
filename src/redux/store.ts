import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/slice.ts';
import filter from './filter/slice.ts';
import fetchProducts from './catchItems/slice.ts';

export const store = configureStore({
    reducer: {
        cart,
        // favorite,
        filter,
        fetchProducts,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
