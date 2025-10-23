import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchMovieLink, options } from "../../utils/constant";

export const searchHandler = createAsyncThunk("search/movie", async (query) => {
  const response = await fetch(searchMovieLink + query, options);
  if (!response.ok) {
    throw new Error(`Failed to search for ${query}`);
  }
  const data = await response.json();
  return data;
});

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    result: [],
    page: null,
    totalPage: null,
    totalResults: null,
    loading: false,
    error: null,
  },
  reducer: {},
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.loading = true;
      state.error = null;
    };

    const handleRejected = (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    };

    builder
      .addCase(searchHandler.pending, handlePending)
      .addCase(searchHandler.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload.results;
        state.page = action.payload.page;
        state.totalPage = action.payload.total_pages;
        state.totalResults = action.payload.total_results;
      })
      .addCase(searchHandler.rejected, handleRejected);
  },
});

export default searchResultSlice.reducer;
