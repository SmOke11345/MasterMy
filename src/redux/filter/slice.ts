import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState, SortProp, SortType } from './types.ts';

const initialState: FilterState = {
    category: 0,
    currentPage: 1,
    // задаем значение по умолчанию
    sort: {
        name: 'По умолчанию',
        value: SortType.DEFAULT,
    },
    search: '',
};
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<number>) => {
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

export const { setCategory, setCurrentPage, setSort } = filterSlice.actions;
export default filterSlice.reducer;
