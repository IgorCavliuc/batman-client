import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getAllUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const dataUserSlice = (state) => state.userSlice;
export const { getAllUser } = userSlice.actions;

export default userSlice.reducer;
