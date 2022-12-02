import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./reducers/postsSlice";
import usersSlice from "./reducers/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersSlice,
  },
});
