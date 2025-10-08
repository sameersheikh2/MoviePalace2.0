import { movieImageLink } from "../utils/constant";
import Cast from "./Cast";

const MovieMeta = ({ movie }) => {
  if (!movie) {
    return (
      <div className="flex justify-center h-screen items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  const posterUrl = movie?.poster_path
    ? movieImageLink + movie.poster_path
    : null;

  const trailer = movie?.videos?.results?.find(
    (video) => video.type === "Trailer"
  );
  const trailerUrl = trailer?.key
    ? `https://www.youtube.com/embed/${trailer.key}`
    : null;

  return (
    <div className="mb-80 mx-20 ">
      <div className="h-[70%] flex gap-5 md:flex-row flex-col">
        <div className="w-[350px] h-[500px]">
          {posterUrl ? (
            <img
              className="w-full h-full bg-cover rounded-xl lazyload"
              src={posterUrl}
              alt={movie.title || "Movie Poster"}
            />
          ) : (
            <div className="skeleton w-[400px] bg-gray-400 h-[500px]" />
          )}
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-6xl font-bold mb-6">{movie.title}</h1>
            <button className="rounded-lg bg-black text-white px-4 py-2 border border-black mr-3 cursor-pointer hover:bg-[#373737] transition-all ease duration-500">
              Add to Watchlist
            </button>
            <button className="rounded-lg px-4 py-2 border border-black cursor-pointer hover:bg-black hover:text-white transition-all ease duration-500">
              Already Watched
            </button>
          </div>

          {trailerUrl && (
            <div className="rounded-xl overflow-hidden">
              <iframe
                loading="lazy"
                className="w-[300px] sm:w-[550px] sm:h-[350px] h-[200px] rounded-xl"
                src={trailerUrl}
                title="Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="my-16">
        {movie?.genres && (
          <div className="flex gap-2 mb-4">
            Genres:
            {movie?.genres.map(({ name }, index) => (
              <p key={index}>{name}, </p>
            ))}
          </div>
        )}
        <h2 className="text-3xl font-bold my-5 mt-10">Synopsis</h2>
        <p className="text-md">{movie.overview}</p>
      </div>
      <div className="">
        <h2 className="text-4xl font-bold text-center">Cast</h2>
        <Cast castInfo={movie?.credits?.cast} />
      </div>
    </div>
  );
};

export default MovieMeta;
