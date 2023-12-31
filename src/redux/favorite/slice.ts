import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteProp } from './types.ts';
import { Items } from '../cart/types.ts';
import { GetLocalStorage } from '../../utils/GetLocalStorage.ts';

const { itemsFav } = GetLocalStorage();

const initialState: FavoriteProp = {
    items: itemsFav,
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavor: (state, action: PayloadAction<Items>) => {
            const findItem = state.items.find((item) => item.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
        },
        removeFavorItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addToFavor, removeFavorItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
