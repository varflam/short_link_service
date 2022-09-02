import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    password: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    }
});

const {actions, reducer} = userSlice;

export const {setUser} = actions;
export default reducer;