import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/BooksSlice";
import bookmarksReducer from "./slices/bookmarksSlice";
export const store = configureStore({
  reducer: {
    books: booksReducer,
    bookmarks: bookmarksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
