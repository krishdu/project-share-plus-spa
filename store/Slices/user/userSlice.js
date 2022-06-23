import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAutheticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    loadUserRequest: (state, action) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isAutheticated = true;
      state.loading = false;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUserRequest: (state) => {
      state.loading = true;
    },
    logoutUserSuccess: (state) => {
      state.user = {};
      state.isAutheticated = false;
      state.loading = false;
    },
    logoutUserFail: (state, action) => {
      state.error = action.payload;
    },
    clearErrors: (state, action) => {
      state.error = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
