import React from "react";
import { Link } from "react-router";

const MovieCard = ({ movieData }) => {
  const formatOverview = (overview) => {
    let substring;
    if (overview.length > 40) {
      substring = overview.substring(0, 40) + "...";
    }
    return substring;
  };
  return (
    <Link to={`/movie/${movieData.id}`}>
      <div className="w-80 h-[35rem] shadow-md cursor-pointer hover:scale-[102%] transition-all ease-in-out duration-300 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="w-[300px] h-[425px] m-auto rounded-sm">
          <img
            className="bg-cover w-full h-full rounded-sm"
            src={`https://image.tmdb.org/t/p/original/${movieData?.poster_path}`}
            alt=""
          />
        </div>
        <div className="mx-3 mt-4 text-center">
          <h2 className="md:text-2xl text-lg font-semibold text-gray-900 dark:text-white">
            {movieData?.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {movieData && formatOverview(movieData?.overview)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
