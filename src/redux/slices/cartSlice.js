import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item._id !== action.payload._id);
    },
    incrementQuantity(state, action) {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
