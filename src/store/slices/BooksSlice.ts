import axios from "axios";
import type BookProps from "../../models/BookProps";
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { BACK_URL } from "../../constants";

interface BooksState {
  books: BookProps[];
  total: number;

  loading: boolean;
  error: string | null;
  currentPage: number;
  booksPerPage: number;
  selectedBook: BookProps | null;
  allBooks: BookProps[];
}

const initialState: BooksState = {
  books: [],
  total: 0,
  loading: false,
  error: null,
  currentPage: 1,
  booksPerPage: 18,
  selectedBook: null,
  allBooks: [],
};

export const fetchAllBooks = createAsyncThunk(
  "books/fetchAllBooks",
  async () => {
    const limit = 20;
    let page = 1;
    const allBooks: BookProps[] = [];
    let totalFetched = 0;
    let totalAvailable = Infinity;

    while (totalFetched < totalAvailable) {
      const res = await axios.get(
        `${BACK_URL}/books?page=${page}&limit=${limit}`,
      );
      allBooks.push(...res.data.books);
      totalFetched += res.data.books.length;
      totalAvailable = res.data.total;
      page++;
    }

    return allBooks;
  },
);

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async ({ page, limit }: { page: number; limit: number }) => {
    const response = await axios.get(
      `${BACK_URL}/books?page=${page}&limit=${limit}`,
    );
    return response.data;
  },
);

export const fetchBookById = createAsyncThunk(
  "books/fetchBookById",
  async (id: string) => {
    const response = await axios.get(`${BACK_URL}/books/${id}`);
    return response.data;
  },
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload.books;
        state.total = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch books.";
      })
      .addCase(fetchBookById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedBook = null;
      })
      .addCase(
        fetchBookById.fulfilled,
        (state, action: PayloadAction<BookProps>) => {
          state.loading = false;
          state.selectedBook = action.payload;
        },
      )
      .addCase(fetchBookById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch book.";
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.allBooks = action.payload;
      });
  },
});

export const { setCurrentPage } = booksSlice.actions;
export default booksSlice.reducer;
