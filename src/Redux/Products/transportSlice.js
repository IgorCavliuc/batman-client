import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const transportSlice = createSlice({
  name: "transportSlice",
  initialState,
  reducers: {
    getAllTransport: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const dataTransportSlice = (state) => state.transportSlice;
export const { getAllTransport } = transportSlice.actions;

export default transportSlice.reducer;
