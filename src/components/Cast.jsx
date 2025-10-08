import React from "react";

const Cast = ({ castInfo }) => {
  return (
    <div className="mt-10 flex justify-center gap-5 flex-wrap items-center">
      {castInfo && castInfo.length > 0 ? (
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
                <button className="btn btn-primary">More</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <div className="skeleton w-[400px] bg-gray-400 h-[500px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title skeleton">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cast;
