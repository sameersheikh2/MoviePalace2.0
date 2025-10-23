import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  movieDetailLink,
  movieGenreListLink,
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

export const fetchDiscover = createAsyncThunk(
  "movies/fetchDiscover",
  async ({ type, page }) => {
    const t = type === "popular" || type === "now_playing" || type === "top_rated" ? type : "top_rated";
    const p = page && page > 0 ? page : 1;
    const url = `https://api.themoviedb.org/3/movie/${t}?language=en-US&page=${p}`;
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch discover");
    }
    const data = await response.json();
    return { results: data.results || [], page: data.page || p, total_pages: data.total_pages || 1 };
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    searchResults: [],
    movieDetails: null,
    genre: [],
    filters: {},
    loading: false,
    error: null,
    discover: {
      items: [],
      page: 1,
      totalPages: 1,
      type: "top_rated",
    },
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
    setDiscoverPage(state, action) {
      state.discover.page = action.payload;
    },
    setDiscoverType(state, action) {
      state.discover.type = action.payload;
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
      .addCase(fetchPopularMovies.pending, handlePending)
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, handleRejected)
      .addCase(fetchTopRated.pending, handlePending)
      .addCase(fetchTopRated.fulfilled, (state, action) => {
        state.loading = false;
        state.topRatedMovies = action.payload;
      })
      .addCase(fetchTopRated.rejected, handleRejected)
      .addCase(fetchDiscover.pending, handlePending)
      .addCase(fetchDiscover.fulfilled, (state, action) => {
        state.loading = false;
        state.discover.items = action.payload.results;
        state.discover.page = action.payload.page;
        state.discover.totalPages = action.payload.total_pages;
      })
      .addCase(fetchDiscover.rejected, handleRejected);
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

export const { setMovieDetails, setMoviesGenre, setSearchResults, setDiscoverPage, setDiscoverType } =
  moviesSlice.actions;
export default moviesSlice.reducer;
