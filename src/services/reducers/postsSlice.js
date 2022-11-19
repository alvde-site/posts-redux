import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Первый отзыв", content: "Привет!" },
  { id: "2", title: "Второй отзыв", content: "Еще текст" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  },
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;