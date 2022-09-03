import { configureStore } from '@reduxjs/toolkit';
import { userApiSlice } from '../api/apiSlice';
import user from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user,
    [userApiSlice.reducerPath]: userApiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});
