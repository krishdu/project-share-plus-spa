import { createSlice } from "@reduxjs/toolkit";

const registerUser = createSlice({
  name: "registerUser",
  initialState: {
    user: {},
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    registerUserRequest: (state, action) => {
      state.loading = true;
    },
    registerUserSuccess: (state, action) => {
      state.user = action.payload.user;
      state.success = action.payload.success;
      state.loading = false;
    },
    registerUserFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    resetRegisterUser: (state, action) => {
      state.success = false;
    },
    clearErrors: (state, action) => {
      state.error = null;
    },
  },
});

export const registerUserActions = registerUser.actions;
export default registerUser.reducer;
