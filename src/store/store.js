import { configureStore } from '@reduxjs/toolkit';
import { userApiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});
