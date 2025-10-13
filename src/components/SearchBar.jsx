import { useState, useRef } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { movieImageLink, searchMovieLink, options } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../store/slices/moviesSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.movies.searchResults);

  const handleSearch = async (val) => {
    setLoading(true);
    try {
      const res = await fetch(searchMovieLink + val, options);
      const data = await res.json();
      dispatch(setSearchResults(data.results || []));
    } catch (err) {
      dispatch(setSearchResults([]));
      console.error("Something went wrong: " + err.message);
    }
    setLoading(false);
    setShowResults(true);
  };

  const handleInput = (e) => {
    const val = e.target.value;
    setQuery(val);
    clearTimeout(debounceRef.current);
    if (val.trim() === "") {
      dispatch(setSearchResults([]));
      setShowResults(false);
      return;
    }
    debounceRef.current = setTimeout(() => {
      handleSearch(val);
    }, 400);
  };

  const handleSelect = (movie) => {
    setShowResults(false);
    setQuery("");
    dispatch(setSearchResults([]));
    navigate(`/movie/${movie.id}`);
  };

  const handleButtonSearch = () => {
    if (query.trim()) handleSearch(query);
  };

  return (
    <div className="w-full max-w-xl mx-auto relative">
      <div className="flex gap-2">
        <Input
          value={query}
          onChange={handleInput}
          placeholder="Search movies..."
          className="rounded-lg px-4 py-2 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button onClick={handleButtonSearch} className="px-4 py-2 rounded-lg">
          Search
        </Button>
      </div>
      {showResults && searchResults.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-900 shadow-lg rounded-lg z-50 max-h-72 overflow-auto">
          {loading ? (
            <div className="p-4 text-center">Loading...</div>
          ) : (
            searchResults.slice(0, 7).map((movie) => (
              <div
                key={movie.id}
                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                onClick={() => handleSelect(movie)}
              >
                <img
                  src={
                    movie.poster_path
                      ? movieImageLink + movie.poster_path
                      : "https://via.placeholder.com/50x75"
                  }
                  alt={movie.title}
                  className="w-10 h-14 object-cover rounded"
                />
                <span className="font-medium text-gray-800 dark:text-white">
                  {movie.title}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
