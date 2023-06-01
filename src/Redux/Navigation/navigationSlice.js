import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const navigationsSlice = createSlice({
  name: "navigationsSlice",
  initialState,
  reducers: {
    setAllNavigation: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const dataNavigationSlice = (state) => state.navigationsSlice
export const { setAllNavigation } = navigationsSlice.actions;

export default navigationsSlice.reducer;
