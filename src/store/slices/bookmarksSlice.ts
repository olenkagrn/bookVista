import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type BookProps from "../../models/BookProps";

interface BookmarksState {
  bookmarks: BookProps[];
}

const initialState: BookmarksState = {
  bookmarks: [],
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark(state, action: PayloadAction<BookProps>) {
      // Перевіряємо, чи книга вже є в закладках, щоб уникнути дублікатів
      const existingBook = state.bookmarks.find(
        (book) => book.id === action.payload.id,
      );
      if (!existingBook) {
        state.bookmarks.push(action.payload);
      }
    },
    removeBookmark(state, action: PayloadAction<number>) {
      state.bookmarks = state.bookmarks.filter(
        (book) => book.id !== action.payload,
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
