import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {},
});

// export {} = favoriteSlice.actions;
export default favoriteSlice.reducer;