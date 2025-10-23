import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import castSlice from "./slices/castSlice";
import searchResultSlice from "./slices/searchResultSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    castInfo: castSlice,
    searchResult: searchResultSlice,
  },
});

export default store;
