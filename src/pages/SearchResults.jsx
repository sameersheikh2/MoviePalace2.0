import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const genres = ["Action", "Comedy", "Drama", "Horror"];
const years = ["2024", "2023", "2022", "2021"];
const ratings = ["9+", "8+", "7+", "6+"];

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "latest", label: "Latest" },
  { value: "rating", label: "Highest Rated" },
];

export default function SearchResults() {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  useEffect(() => {
    console.log("Filters changed:", {
      genre: genre || "all",
      year: year || "all",
      rating: rating || "all",
      sortBy: sortBy,
    });
  }, [genre, year, rating, sortBy]);

  return (
    <div className="container mx-auto p-4">
      {/* Filters & Sorting */}
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Select value={genre} onValueChange={setGenre}>
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

            <Select value={year} onValueChange={setYear}>
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

            <Select value={rating} onValueChange={setRating}>
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

          {/* Sorting */}
          <div>
            <Select value={sortBy} onValueChange={setSortBy}>
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

      {/* Selected Filters & Search Term */}
      {(genre || year || rating) && (
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          {/* Show selected genre */}
          {genre && genre !== "all" && (
            <span className="inline-flex items-center gap-1 rounded-full border border-base-300 bg-base-300 px-3 py-1 text-xs font-medium text-base-content">
              Genre: {genres.find((g) => g.toLowerCase() === genre) || genre}
              <button
                onClick={() => setGenre("")}
                className="ml-1 hover:text-error"
                aria-label="Clear genre filter"
              >
                ×
              </button>
            </span>
          )}

          {/* Show selected year */}
          {year && year !== "all" && (
            <span className="inline-flex items-center gap-1 rounded-full border border-base-300 bg-base-300 px-3 py-1 text-xs font-medium text-base-content">
              Year: {year}
              <button
                onClick={() => setYear("")}
                className="ml-1 hover:text-error"
                aria-label="Clear year filter"
              >
                ×
              </button>
            </span>
          )}

          {/* Show selected rating */}
          {rating && rating !== "all" && (
            <span className="inline-flex items-center gap-1 rounded-full border border-base-300 bg-base-300 px-3 py-1 text-xs font-medium text-base-content">
              Rating: {rating}
              <button
                onClick={() => setRating("")}
                className="ml-1 hover:text-error"
                aria-label="Clear rating filter"
              >
                ×
              </button>
            </span>
          )}

          {/* Clear all button */}
          {(genre || year || rating) && (
            <button
              onClick={() => {
                setGenre("");
                setYear("");
                setRating("");
              }}
              className="text-xs text-base-content/70 hover:text-base-content underline"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      <div className="divider dark:divider divider-neutral my-2" />
    </div>
  );
}
