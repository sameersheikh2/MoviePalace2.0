import { useSearchParams } from "react-router-dom";
import Filters from "../components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchHandler } from "../store/slices/searchResultSlice";
import MovieCard from "../components/MovieCard";

const SearchResults = () => {
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();
  console.log(params.get("q"));
  const { result } = useSelector((state) => state.searchResult);
  console.log(result);

  useEffect(() => {
    const q = params.get("q") || "";
    if (q) {
      dispatch(searchHandler(q));
    }
  }, [params, dispatch]);

  const values = {
    genre: params.get("genre") || "",
    year: params.get("year") || "",
    rating: params.get("rating") || "",
    sortBy: params.get("sort") || "popular",
  };

  const applyUrlFromValues = (v) => {
    const p = new URLSearchParams(params);
    v.sortBy ? p.set("sort", v.sortBy) : p.delete("sort");
    v.genre ? p.set("genre", v.genre) : p.delete("genre");
    v.year ? p.set("year", v.year) : p.delete("year");
    v.rating ? p.set("rating", v.rating) : p.delete("rating");
    p.set("page", "1");
    setParams(p, { replace: false });
  };

  return (
    <div className="container mx-auto p-4">
      <Filters values={values} onChange={applyUrlFromValues} />
      <div className="divider dark:divider divider-neutral my-2" />
      {/* Results + Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-3">
        {result.map((movie) => (
          <MovieCard movieData={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
