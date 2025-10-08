import React, { useEffect } from "react";
import MovieMeta from "../components/MovieMeta";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMovieDetail } from "../store/slices/moviesSlice";

const MovieDetail = () => {
  const movieId = useParams().id;
  const movie = useSelector((state) => state.movies.movieDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
    return () => {
      dispatch({ type: "movies/setMovieDetails", payload: null });
    };
  }, [movieId, dispatch]);
  return <MovieMeta movie={movie} />;
};

export default MovieDetail;
