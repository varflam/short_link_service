import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userApiSlice } from '../api/apiSlice';
import user from './slices/userSlice';
import links from './slices/linksSlice';

export const store = configureStore({
  reducer: {
    user,
    links,
    [userApiSlice.reducerPath]: userApiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApiSlice.middleware, thunk),
    devTools: process.env.NODE_ENV !== 'production'
});
