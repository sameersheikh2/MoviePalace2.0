import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchNowPlaying,
  fetchPopularMovies,
  fetchTopRated,
} from "../store/slices/moviesSlice";

import MovieCarousel from "./MovieCarousel";
import NowPlayingCarousel from "./NowPlayingCarousel";

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
    <div className="pt-24 md:px-20 px-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <NowPlayingCarousel movies={nowPlayingMovies} />
      <MovieCarousel title="Popular Movies" movies={popularMovies} />
      <MovieCarousel title="Top Rated" movies={topRatedMovies} />
    </div>
  );
}

export default MoviesList;
