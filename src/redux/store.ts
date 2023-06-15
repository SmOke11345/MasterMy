import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/slice.ts';
import favorite from './favorite/slice.ts';
import filter from './filter/slice.ts';

export const store = configureStore({
    reducer: {
        cart,
        favorite,
        filter,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
