import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketItem: [],
  basketSelect: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    basketItemAdded: (state, action) => {
      state.basketItem.push(action.payload);
    },
    basketItemRefresh: (state, action) => {
      state.basketItem = action.payload;
    },
    basketSelectChanged: (state, action) => {
      state.basketSelect = action.payload;
    },
  },
});

export const { basketItemAdded,basketItemRefresh, basketSelectChanged } = basketSlice.actions;

export const selectBasketData = (state) => state.basket;

export default basketSlice.reducer;
