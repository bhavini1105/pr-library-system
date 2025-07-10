import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks, addBook, deleteBook } from "./thunk";

const initialState = {
  library: [],
  loading: false,
  error: null,
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.library = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.library.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.library = state.library.filter(book => book.id !== action.payload);
      });
  },
});

export default librarySlice.reducer;
