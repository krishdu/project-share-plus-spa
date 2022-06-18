import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slices/feeds/postSlice";
import userReducer from "./Slices/user/userSlice";
import registerUserReducer from "./Slices/user/registerUserSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    registerUser: registerUserReducer,
  },
});

export default store;
