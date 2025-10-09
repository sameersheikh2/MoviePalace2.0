import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchNowPlaying,
  fetchPopularMovies,
  fetchTopRated,
} from "../store/slices/moviesSlice";

import MovieCarousel from "./MovieCarousel";

function MoviesList() {
  const { nowPlayingMovies, popularMovies, topRatedMovies, loading, error } =
    useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlaying());
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRated());
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex justify-center h-screen items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  if (error) return <div>Error!</div>;

  return (
    <div className="px-20">
      <MovieCarousel title="Now Playing" movies={nowPlayingMovies} />
      <MovieCarousel title="Popular Movies" movies={popularMovies} />
      <MovieCarousel title="Top Rated" movies={topRatedMovies} />
    </div>
  );
}

export default MoviesList;
