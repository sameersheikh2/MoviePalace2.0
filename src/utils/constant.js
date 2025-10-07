const token = import.meta.env.VITE_MY_BEARER_TOKEN;
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const movieImageLink = "https://image.tmdb.org/t/p/original/";

export const movieLinkNowPlaying =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const movieLinkPopular =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const movieLinkTopRated =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const searchMovieLink =
  "https://api.themoviedb.org/3/search/movie?query=";

export const movieDetailLink = "https://api.themoviedb.org/3/movie/";
