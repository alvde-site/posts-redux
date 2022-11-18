import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Первый комментарий", content: "Привет!" },
  { id: "2", title: "Второй комментарий", content: "Еще текст" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;