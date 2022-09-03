import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    isAuth: false,
    token: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
            state.isAuth = false;
        },
        setIsAuth: (state, action) => {
            state.error = null;
            state.isAuth = true;
            state.token = action.payload;
        }
    }
});

const {actions, reducer} = userSlice;

export const {setLoading, setError, setIsAuth} = actions;
export default reducer;