import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    getAllPost: (state, action) => {
      state.posts.push(...action.payload);
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
