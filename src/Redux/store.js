import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Products/productSlice";
import userSlice from "./User/userSlice";
import navigationSlice from "./Navigation/navigationSlice";
import createPostSlice from "./AddPost/createPostSlice";
const store = configureStore({
  reducer: {
    productSlice,
    userSlice,
    navigationSlice,
    createPostSlice,
  },
});

export default store;
