import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../services/tmdb";
import MoviesGrid from "../components/movies/MoviesGrid";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovieData = async () => {
      try {
        const data = await fetchPopularMovies();
        console.log("from home page:", data);
        setMovies(data.results);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };
    getMovieData();
  }, []);
  return (
    <div>
      <MoviesGrid movies={movies} />
    </div>
  );
}
