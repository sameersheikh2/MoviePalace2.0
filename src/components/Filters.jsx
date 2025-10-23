import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const Filters = ({
  values,
  onChange,
  genres = ["Action", "Comedy", "Drama", "Horror"],
  years = ["2024", "2023", "2022", "2021"],
  ratings = ["9+", "8+", "7+", "6+"],
  sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "latest", label: "Latest" },
    { value: "rating", label: "Highest Rated" },
  ],
  showChips = true,
}) => {
  const { genre, year, rating, sortBy } = values;

  const setField = (key, val) => {
    onChange({ ...values, [key]: val });
  };

  const clearAll = () => {
    onChange({ genre: "", year: "", rating: "", sortBy: "popular" });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Select value={genre} onValueChange={(v) => setField("genre", v)}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genres</SelectItem>
                {genres.map((g) => (
                  <SelectItem key={g} value={g.toLowerCase()}>
                    {g}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={year} onValueChange={(v) => setField("year", v)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((y) => (
                  <SelectItem key={y} value={y}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={rating} onValueChange={(v) => setField("rating", v)}>
              <SelectTrigger className="w-28">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Rating</SelectItem>
                {ratings.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select value={sortBy} onValueChange={(v) => setField("sortBy", v)}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {showChips && (genre || year || rating) && (
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          {genre && genre !== "all" && (
            <span
              onClick={() => setField("genre", "")}
              className="inline-flex items-center gap-1 rounded-full border border-base-300 bg-base-300 px-3 py-1 text-xs font-medium text-base-content cursor-pointer"
            >
              Genre: {genres.find((g) => g.toLowerCase() === genre) || genre}
              <button
                onClick={() => setField("genre", "")}
                className="ml-1 hover:text-error cursor-pointer"
                aria-label="Clear genre filter"
              >
                ×
              </button>
            </span>
          )}

          {year && year !== "all" && (
            <span
              onClick={() => setField("year", "")}
              className="inline-flex items-center gap-1 rounded-full border border-base-300 bg-base-300 px-3 py-1 text-xs font-medium text-base-content cursor-pointer"
            >
              Year: {year}
              <button
                onClick={() => setField("year", "")}
                className="ml-1 hover:text-error"
                aria-label="Clear year filter"
              >
                ×
              </button>
            </span>
          )}

          {rating && rating !== "all" && (
            <span
              onClick={() => setField("rating", "")}
              className="inline-flex items-center gap-1 rounded-full border border-base-300 bg-base-300 px-3 py-1 text-xs font-medium text-base-content cursor-pointer"
            >
              Rating: {rating}
              <button
                onClick={() => setField("rating", "")}
                className="ml-1 hover:text-error"
                aria-label="Clear rating filter"
              >
                ×
              </button>
            </span>
          )}

          {(genre || year || rating) && (
            <button
              onClick={clearAll}
              className="text-xs text-base-content/70 hover:text-base-content underline"
            >
              Clear all
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Filters;
