import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialReactions = {
  thumbsUp: 0,
  thumbsDown: 0,
  hooray: 0,
  heart: 0,
  rocket: 0,
  eyes: 0,
};

const initialState = [
  {
    id: "1",
    title: "Первый отзыв",
    content: "Привет!",
    reactions: initialReactions,
  },
  {
    id: "2",
    title: "Второй отзыв",
    content: "Еще текст",
    reactions: initialReactions,
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            dateTitle: new Date().toString(),
            title,
            content,
            user: userId,
            reactions: initialReactions,
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
