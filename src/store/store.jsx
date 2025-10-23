import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import castSlice from "./slices/castSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    castInfo: castSlice,
  },
});

export default store;
