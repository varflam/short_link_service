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
        setAuthUser: (state, action) => {
            state.status = 'confirmed';
            state.error = null;
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        setLoading: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        logUserOut: (state) => {
            state.error = null;
            state.status = 'waiting';
            state.token = null;
            state.username = null;
            state.password = null;
        }
    }
});

const {actions, reducer} = userSlice;

export const {setError, setAuthUser, setLoading, logUserOut} = actions;
export default reducer;