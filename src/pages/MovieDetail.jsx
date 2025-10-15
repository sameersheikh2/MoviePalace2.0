import React, { useEffect } from "react";
import MovieMeta from "../components/MovieMeta";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMovieDetail } from "../store/slices/moviesSlice";
import { setMovieDetails } from "../store/slices/moviesSlice";

const MovieDetail = () => {
  const movieId = useParams().id;
  const { movieDetails } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setMovieDetails(null));
    dispatch(fetchMovieDetail(movieId));
  }, [movieId, dispatch]);

  return <MovieMeta movie={movieDetails} navigate={navigate} />;
};

export default MovieDetail;
