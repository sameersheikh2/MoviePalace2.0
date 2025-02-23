import { movieLink, options } from "../utils/constant";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch(movieLink, options);
    const data = await res.json();
    console.log(data.results);
    setMovies(data.results);
  };
  return (
    <>
      <MovieDetail movie={movies[0]} />
      <div className="flex gap-5 justify-center items-center flex-wrap">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
