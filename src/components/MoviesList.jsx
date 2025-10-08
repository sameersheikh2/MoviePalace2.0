import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { fetchNowPlaying } from "../store/slices/moviesSlice";

function MoviesList() {
  const { nowPlayingMovies, loading, error } = useSelector(
    (state) => state.movies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlaying());
    // dispatch(fetchPopularMovies());
    // dispatch(fetchTopRated());
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex justify-center h-screen items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  if (error) return <div>Error!</div>;

  return (
    <div className="flex justify-center flex-wrap gap-10 px-20">
      {nowPlayingMovies.map((movie) => (
        <MovieCard key={movie.id} movieData={movie} />
      ))}
    </div>
  );
}
export default MoviesList;
