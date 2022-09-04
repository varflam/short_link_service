import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    isAuth: false,
    token: null,
    username: null,
    password: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
            state.isAuth = false;
        },
        setAuthUser: (state, action) => {
            state.error = null;
            state.isAuth = true;
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    }
});

const {actions, reducer} = userSlice;

export const {setError, setAuthUser} = actions;
export default reducer;