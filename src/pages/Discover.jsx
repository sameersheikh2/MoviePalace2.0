import React, { useEffect } from "react";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router";
import {
  fetchDiscover,
  setDiscoverPage,
  setDiscoverType,
} from "../store/slices/moviesSlice";

const Discover = () => {
  const dispatch = useDispatch();
  const { items, page, totalPages, type } = useSelector(
    (state) => state.movies.discover
  );
  const params = useParams();
  const label =
    type === "popular"
      ? "Popular"
      : type === "top_rated"
      ? "Top Rated"
      : type === "now_playing"
      ? "Now Playing"
      : "Top Rated";

  useEffect(() => {
    const t = params?.type || "top_rated";
    if (t !== type) {
      dispatch(setDiscoverType(t));
      dispatch(setDiscoverPage(1));
    }
  }, [params?.type, type, dispatch]);

  useEffect(() => {
    if (!type) return;
    dispatch(fetchDiscover({ type, page }));
  }, [type, page, dispatch]);

  const handlePrev = () => {
    if (page > 1) dispatch(setDiscoverPage(page - 1));
  };
  const handleNext = () => {
    if (page < totalPages) dispatch(setDiscoverPage(page + 1));
  };

  return (
    <div className="pt-10 md:px-20 px-6">
      <div className="text-left mb-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{label}</h2>
        <div className="divider bg-gray-300 dark:bg-gray-600 h-[1px]"></div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {items.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
      <Pagination
        current={page}
        total={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default Discover;
