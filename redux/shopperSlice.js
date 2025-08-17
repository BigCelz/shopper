import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const shopperSlice = createSlice({
  name: "shopper",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.productData.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.productData.find((i) => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.productData = state.productData.filter(
            (i) => i.id !== action.payload.id
          );
        }
      }
    },

    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (i) => i.id !== action.payload.id
      );
    },

    resetCart: (state) => {
      state.productData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  resetCart,
} = shopperSlice.actions;

export default shopperSlice.reducer;
