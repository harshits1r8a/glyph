import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPostStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    fetchPostSuccess: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },

    fetchPostFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    createPost: (state, action) => {
      state.posts.push(action.payload);
    },

    updatepost: (state, action) => {
      const updatedPost = action.payload;
      state.posts = state.posts.map((post) => {
        post.id === updatedPost.id ? updatedPost : post;
      });
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const {
  fetchPostStart,
  fetchPostSuccess,
  fetchPostFailure,
  createPost,
  updatepost,
  deletePost
} = postSlice.actions;

export default postSlice.reducer
