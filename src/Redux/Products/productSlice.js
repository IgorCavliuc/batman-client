import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  select:{}

};

export const productSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    getAllProduct: (state, action) => {
      state.items = action.payload;
    },
    selectPrductAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const dataProductSlice = (state) => state.productsSlice;
export const { getAllProduct, selectPrductAction } = productSlice.actions;

export default productSlice.reducer;
