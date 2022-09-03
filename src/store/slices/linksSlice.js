import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    links: []
}

const linkSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        setLink: (state, action) => {
            state.links.push(action.payload);
        }
    }
});

const {actions, reducer} = linkSlice;

export const {setLink} = actions;

export default reducer;