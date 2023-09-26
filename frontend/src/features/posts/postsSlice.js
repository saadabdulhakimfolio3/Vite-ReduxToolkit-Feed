import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things",
  },

  {
    id: "2",
    title: "Slices....",
    content: "The more I say slice, the more I want pizza",
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      // Inside our slice we don't need to create copies of our state, the slice automatically mutates.
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;