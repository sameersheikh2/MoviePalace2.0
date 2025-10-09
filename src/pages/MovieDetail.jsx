import React, { useEffect } from "react";
import MovieMeta from "../components/MovieMeta";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMovieDetail } from "../store/slices/moviesSlice";
import { setMovieDetails } from "../store/slices/moviesSlice";

const MovieDetail = () => {
  const movieId = useParams().id;
  const { movieDetails } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return () => {
      // dispatch({ type: "movies/setMovieDetails", payload: null });
      dispatch(setMovieDetails(null));
    };
  }, [movieId, dispatch]);
  return <MovieMeta movie={movieDetails} />;
};

export default MovieDetail;
