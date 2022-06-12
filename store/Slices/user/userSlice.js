import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAutheticated: false,
    error: null,
  },
  reducers: {
    loadUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isAutheticated = true;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
