import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortBy: ['asc_short'],
    error: null
}

const linkSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        setLink: (state, action) => {
            state.links.push(action.payload);
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        }
    }
});

const {actions, reducer} = linkSlice;

export const {setLink, setError, setSortBy} = actions;

export default reducer;