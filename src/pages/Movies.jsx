import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../services/tmdb";
import MoviesGrid from "../components/movies/MoviesGrid";
import { useDebounce } from "../hooks/useDebounce";
import SearchBar from "../components/movies/SearchBar";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(searchQuery, 500);
  useEffect(() => {
    const getMovieData = async () => {
      setLoading(true);
      try {
        let data;
        // 2. Determine which API call to make
        if (debouncedQuery.trim()) {
          data = await searchMovies(debouncedQuery);
        } else {
          data = await fetchPopularMovies();
        }
        console.log("from home page:", data);
        // 3. Update state with results
        setMovies(data.results);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    getMovieData();
  }, [debouncedQuery]);
  return (
    <div className="min-h-screen">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {loading ? (
        <div className="text-center text-white text-xl mt-12">
          Loading movies...
        </div>
      ) : movies.length > 0 ? (
        <MoviesGrid movies={movies} />
      ) : (
        <div className="text-center text-gray-400 text-xl mt-12">
          No movies found for "{searchQuery}".
        </div>
      )}
    </div>
  );
}
