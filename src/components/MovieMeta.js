import React from "react";
import { movieImageLink } from "../utils/constant";

const MovieMeta = ({ movie }) => {
  console.log(movie);
  return (
    <div className="mb-80 mx-5 h-[60rem] md:h-[45rem]">
      <div className="h-[70%] flex gap-5 md:flex-row flex-col">
        <div className="w-[350px] h-[500px]">
          <img
            className="w-full h-full bg-cover rounded-xl"
            src={movieImageLink + movie?.poster_path}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-6xl font-bold mb-6">{movie?.title}</h1>
            <button className="rounded-xl bg-black text-white px-4 py-2 border border-black mr-3 cursor-pointer">
              Add to Watchlist
            </button>
            <button className="rounded-xl px-4 py-2 border border-black cursor-pointer">
              Already Watched
            </button>
          </div>
          <p>Genre: Adventure, Action, Sci-Fi</p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold my-5">Synposis</h2>
        <p className="text-md">{movie?.overview}</p>
      </div>
    </div>
  );
};

export default MovieMeta;
