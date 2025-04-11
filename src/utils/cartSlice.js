// importing necessary components
import { createSlice } from '@reduxjs/toolkit';

// creating a cartSlice to store and update the items in the cart using reducer functions
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    searchQuery: '',
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
        item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },    
  },
});

export const {
  addToCart,
  removeFromCart,
  setSearchQuery,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
