// importing necessary components and cartReducer from cartSlice
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// creating a redux store and adding the cartReducer to it
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
