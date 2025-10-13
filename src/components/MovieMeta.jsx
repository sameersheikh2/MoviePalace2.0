import { movieImageLink } from "../utils/constant";
import Cast from "./Cast";
import MovieImagesCarousel from "./MovieImagesCarousel";
import SimilarMoviesCarousel from "./SimilarMoviesCarousel";

const MovieMeta = ({ movie }) => {
  if (!movie || movie === null) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  const posterUrl = movie.poster_path
    ? movieImageLink + movie.poster_path
    : null;

  const trailer = movie.videos?.results?.find((vid) => vid.type === "Trailer");
  const trailerUrl = trailer?.key
    ? `https://www.youtube.com/embed/${trailer.key}`
    : null;

  return (
    <div className="px-4 sm:px-8 md:px-20 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full sm:w-80 md:w-96 aspect-[2/3] flex-shrink-0">
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={movie.title || "Movie Poster"}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 skeleton rounded-xl" />
          )}
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            {movie.title ? (
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                {movie.title}
              </h1>
            ) : (
              <div className="skeleton h-20 bg-gray-200 w-48 rounded-3xl mb-10"></div>
            )}
            {typeof movie.vote_average === "number" && (
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500 text-xl md:text-2xl">★</span>
                <span className="text-lg md:text-4xl font-semibold">
                  {movie.vote_average.toFixed(1)}
                </span>
                <span className="text-gray-500 text-base md:text-lg">/ 10</span>
                {movie.vote_count ? (
                  <span className="text-gray-400 text-xs md:text-sm">
                    ({movie.vote_count} votes)
                  </span>
                ) : null}
              </div>
            )}
            <div className="space-x-2 mb-4 ">
              <button
                className={`rounded-lg bg-black text-white px-4 py-2 border border-black hover:bg-white hover:text-black  cursor-pointer duration-300 ease-in-out transform transition-all`}
              >
                Add to Watchlist
              </button>
              <button className="rounded-lg px-4 py-2 border border-black hover:bg-black hover:text-white  cursor-pointer duration-300 ease-in-out transform transition-all dark:bg-blue-800 dark:hover:bg-blue-600">
                Already Watched
              </button>
            </div>
          </div>

          {trailerUrl && (
            <div className="mt-4 w-full md:w-[550px] aspect-video overflow-hidden rounded-xl">
              <iframe
                loading="lazy"
                className="w-full h-full"
                src={trailerUrl}
                title="Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        {movie.genres && movie.genres.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="font-semibold">Genres:</span>
            {movie.genres.map((g, idx) => (
              <span key={idx}>{g.name}</span>
            ))}
          </div>
        )}
        <h2 className="text-2xl font-bold mt-6 mb-2">Synopsis</h2>
        <p className="text-base sm:text-lg">{movie.overview}</p>
      </div>
      <MovieImagesCarousel backdrops={movie.images?.backdrops} />
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Cast</h2>
        <Cast castInfo={movie.credits?.cast} />
      </div>
      <SimilarMoviesCarousel movies={movie.similar?.results} />
    </div>
  );
};

export default MovieMeta;
