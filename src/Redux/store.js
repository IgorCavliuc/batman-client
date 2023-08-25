import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Products/productSlice";
import userSlice from "./User/userSlice";
import navigationSlice from "./Navigation/navigationSlice";
import createPostSlice from "./AddPost/createPostSlice";
import basket from "./Basket/basket";
const store = configureStore({
  reducer: {
    productSlice,
    userSlice,
    navigationSlice,
    createPostSlice,
    basket
  },
});

export default store;
