import React from "react";

const MovieCard = ({ movieData }) => {
  const formatOverview = (overview) => {
    let substring;
    if (overview.length > 40) {
      substring = overview.substring(0, 40) + "...";
    }
    return substring;
  };
  return (
    <div className="w-80 h-[33rem] shadow-md cursor-pointer hover:scale-[102%] transition-all ease-in-out duration-300">
      <div className="w-[300px] h-[425px] m-auto rounded-sm">
        <img
          className="bg-cover w-full h-full rounded-sm"
          src={`https://image.tmdb.org/t/p/original/${movieData?.poster_path}`}
          alt=""
        />
      </div>
      <div className="mx-3 mt-4  text-center">
        <h2 className="text-2xl font-semibold">{movieData?.title}</h2>
        <p className="text-sm">
          {movieData && formatOverview(movieData?.overview)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
