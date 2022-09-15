import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    status: 'waiting',
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
            state.status = 'error';
            state.token = null;
        },
        setLoading: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        logUserOut: (state) => {
            state.error = null;
            state.status = 'waiting';
            state.token = null;
        },
        setUser: (state, action) => {
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.status = 'confirmed';
            state.error = null;
        },
        setToken: (state, action) => {
            state.token = action.payload;
            state.status = 'confirmed';
            state.error = null;
        }
    }
});

const {actions, reducer} = userSlice;

export const {setError, setLoading, logUserOut, setUser, setToken} = actions;
export default reducer;