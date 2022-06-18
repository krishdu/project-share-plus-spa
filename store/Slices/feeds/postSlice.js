import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    addGetPostRequest: (state) => {
      state.loading = true;
    },
    addPostSuccess: (state, action) => {
      state.posts.unshift(action.payload);
      state.loading = false;
      state.success = true;
    },
    addGetPostFail: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    resetAddPost: (state) => {
      state.success = false;
    },
    getAllPost: (state, action) => {
      state.posts.push(...action.payload);
      state.loading = false;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
