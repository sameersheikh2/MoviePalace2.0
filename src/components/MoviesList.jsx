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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div className="slider-container px-20">
      <h2 className="text-xl ">Now Playing</h2>
      {nowPlayingMovies.map((movie) => (
        <MovieCard key={movie.id} movieData={movie} />
      ))}
    </div>
  );
}
export default MoviesList;
