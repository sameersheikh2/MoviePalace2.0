import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchCastInfo, setCastInfo } from "../store/slices/castSlice";
import { useDispatch, useSelector } from "react-redux";
import CastDetailSkeleton from "../ui/CastDetailSkeleton";

const CastDetail = () => {
  const { castId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const castInfo = useSelector((state) => state.castInfo);

  useEffect(() => {
    dispatch(setCastInfo(null));
    if (castId) {
      dispatch(fetchCastInfo(castId));
    }
  }, [castId, dispatch]);

  if (!castInfo) {
    return <CastDetailSkeleton />;
  }
  const {
    name,
    profile_path,
    biography,
    birthday,
    known_for_department,
    movie_credits,
  } = castInfo;

  return (
    <div className="mt-10 pb-10 flex justify-center gap-5 flex-wrap items-center">
      <div className="mt-6 w-full max-w-4xl mx-auto">
        <button
          className="text-base cursor-pointer hover:bg-blue-600 font-medium transition-all ease-in-out duration-300 rounded-md p-2 hover:text-white dark:bg-blue-800 dark:hover:bg-blue-600"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>

        <h1 className="text-6xl my-4 font-bold">{name ?? "No name"}</h1>
        <p className="text-gray-600 font-semibold text-sm dark:text-white">
          {known_for_department ?? ""}
        </p>

        {birthday && (
          <span className="text-gray-600 dark:text-white font-semibold text-sm block my-2">
            Birthday: {birthday}
          </span>
        )}

        <div className="my-20 flex flex-col md:flex-row items-center gap-4 justify-evenly flex-wrap">
          {profile_path ? (
            <img
              width={300}
              height={400}
              className="object-cover rounded-md overflow-hidden"
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt={name}
            />
          ) : (
            <div className="w-72 h-96 bg-gray-200 flex items-center justify-center">
              No image
            </div>
          )}

          <p className="md:w-1/2 mx-6 text-base font-semibold">
            {biography || "Biography not available."}
          </p>
        </div>

        <div>
          <h1 className="w-full text-center text-4xl font-bold tracking-wider my-7">
            Movies
          </h1>

          {movie_credits?.cast && movie_credits.cast.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {movie_credits.cast.map((movie) => (
                <Link to={"/movie/" + movie.id}>
                  <div
                    key={movie.id}
                    className="card bg-white dark:bg-gray-800 shadow p-3"
                  >
                    <img
                      className="w-full h-48 object-cover"
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                          : "https://via.placeholder.com/300x450"
                      }
                      alt={movie.title || movie.name}
                    />
                    <div className="mt-2">
                      <h2 className="font-semibold">
                        {movie.title || movie.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        as {movie.character}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No movie credits available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CastDetail;
