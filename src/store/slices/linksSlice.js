import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    links: [],
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
        }
    }
});

const {actions, reducer} = linkSlice;

export const {setLink, setError} = actions;

export default reducer;