import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slices/postSlice";
import userReducer from "./Slices/user/userSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
  },
});

export default store;
