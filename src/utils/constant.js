const token = process.env.MY_BEARER_TOKEN;
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const movieImageLink = "https://image.tmdb.org/t/p/original/";
export const movieLink =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const searchMovieLink =
  "https://api.themoviedb.org/3/search/movie?query=";
