import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const productSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    getAllProduct: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const dataProductSlice = (state) => state.productsSlice;
export const { getAllProduct } = productSlice.actions;

export default productSlice.reducer;
