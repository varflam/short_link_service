import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortBy: ['asc_short'],
    error: null
}

const linkSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        }
    }
});

const {actions, reducer} = linkSlice;

export const {setError, setSortBy} = actions;

export default reducer;