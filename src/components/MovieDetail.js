import MovieMeta from "./MovieMeta";

const MovieDetail = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <MovieMeta movie={movie} />
    </>
  );
};

export default MovieDetail;
