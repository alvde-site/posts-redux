import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Первое сообщение!", content: "Привет!" },
  { id: "2", title: "Второе сообщение", content: "Еще текст" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;