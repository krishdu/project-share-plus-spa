import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slices/postSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
