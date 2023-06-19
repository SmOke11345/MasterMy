import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState, SortProp, SortType } from './types.ts';

const initialState: FilterState = {
    category: 'все',
    currentPage: 1,
    search: '',
    sort: {
        name: 'По умолчанию',
        value: SortType.DEFAULT,
    },
};
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setSort: (state, action: PayloadAction<SortProp>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

export const { setCategory, setCurrentPage, setSort, setSearch } = filterSlice.actions;
export default filterSlice.reducer;
