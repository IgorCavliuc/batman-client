import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCategory: [],
  currentCategory: {},
  allSubcategory: [],
};

export const createPostSlice = createSlice({
  name: "createPostSlice",
  initialState,
  reducers: {
    setAllCategory: (state, action) => {
      state.allCategory = action.payload;
    },
    setAllSubCategory: (state, action) => {
      state.allSubcategory = action.payload;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const dataNavigationSlice = (state) => state.createPostSlice;
export const { setAllCategory, setCurrentCategory, setAllSubCategory } =
  createPostSlice.actions;

export default createPostSlice.reducer;
