import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  movieLinkNowPlaying,
  movieLinkPopular,
  movieLinkTopRated,
  options,
} from "../../utils/constant";

const createMovieFetcher = (name, url) => {
  return createAsyncThunk(`movies/${name}`, async () => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${name}`);
    }
    const data = await response.json();
    return data.results;
  });
};

export const fetchNowPlaying = createMovieFetcher(
  "fetchNowPlaying",
  movieLinkNowPlaying
);
export const fetchPopularMovies = createMovieFetcher(
  "fetchPopularMovies",
  movieLinkPopular
);
export const fetchTopRated = createMovieFetcher(
  "fetchTopRated",
  movieLinkTopRated
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    searchResults: [],
    filters: {},
    loading: false,
    error: null,
  },
  reducers: {
    filterMovies: (state, action) => {
      state.filters = action.payload;
    },
  },
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
      .addCase(fetchNowPlaying.pending, handlePending)
      .addCase(fetchNowPlaying.fulfilled, (state, action) => {
        state.loading = false;
        state.nowPlayingMovies = action.payload;
      })
      .addCase(fetchNowPlaying.rejected, handleRejected)

      // Popular Movies
      .addCase(fetchPopularMovies.pending, handlePending)
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, handleRejected)

      // Top Rated
      .addCase(fetchTopRated.pending, handlePending)
      .addCase(fetchTopRated.fulfilled, (state, action) => {
        state.loading = false;
        state.topRatedMovies = action.payload;
      })
      .addCase(fetchTopRated.rejected, handleRejected);
  },
});

export default moviesSlice.reducer;
