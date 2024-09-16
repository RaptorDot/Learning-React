import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
// console.log(authSlice.reducer)


export const store = configureStore({
    reducer :authSlice
})

export default store;