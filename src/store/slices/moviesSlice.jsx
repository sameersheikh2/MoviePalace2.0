import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  movieDetailLink,
  movieGenreListLink,
  movieLinkNowPlaying,
  movieLinkPopular,
  movieLinkTopRated,
  options,
} from "../../utils/constant";

const createMovieFetcher = (name, url, id) => {
  return createAsyncThunk(`movies/${name}`, async () => {
    const response = await fetch(url + id, options);
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

// export const fetchMovieDetails = createMovieFetcher(
//   "fetchMovieDetails",
//   movieDetailLink
// );

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    searchResults: [],
    movieDetails: {},
    genre: [],
    filters: {},
    loading: false,
    error: null,
  },
  reducers: {
    filterMovies: (state, action) => {
      state.filters = action.payload;
    },
    setMovieDetails(state, action) {
      state.movieDetails = action.payload;
    },
    setMoviesGenre(state, action) {
      state.genre = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
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
    // .addCase(fetchMovieDetails.pending, handlePending)
    // .addCase(fetchMovieDetails.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.movieDetails = action.payload;
    // })
    // .addCase(fetchMovieDetails.rejected, handleRejected);
  },
});

export const fetchMovieDetail = (movieId) => async (dispatch) => {
  try {
    const res = await fetch(
      movieDetailLink +
        movieId +
        "?append_to_response=videos%2Cimages%2Ccredits%2Csimilar",
      options
    );
    const data = await res.json();
    dispatch(setMovieDetails(data));
  } catch (error) {
    console.error(error);
  }
};
export const fetchMoviesGenre = () => async (dispatch) => {
  try {
    const res = await fetch(movieGenreListLink, options);
    const data = await res.json();
    dispatch(setMoviesGenre(data));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const { setMovieDetails, setMoviesGenre, setSearchResults } =
  moviesSlice.actions;
export default moviesSlice.reducer;
