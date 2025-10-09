import React from "react";
import { Link } from "react-router-dom";

const Cast = ({ castInfo }) => {
  return (
    <div className="mt-10 flex justify-center gap-5 flex-wrap items-center">
      {castInfo &&
        castInfo.length > 0 &&
        castInfo.slice(0, 15).map((cast) => (
          <div
            key={cast.id}
            className="card w-[350px] h-[200px] card-side bg-white shadow-sm mb-4"
          >
            <figure>
              <img
                className="object-cover w-32 h-full"
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                    : "https://via.placeholder.com/150"
                }
                alt={cast.name}
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{cast.name}</h2>
              <p>as {cast.character}</p>
              <div className="card-actions justify-center">
                <Link>
                  <button className="btn border-2 hover:bg-green-700 bg-green-800 ">
                    More Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cast;
