import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

export default function MoviesGrid({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSeeDetails={(movieData) => setSelectedMovie(movieData)}
          />
        ))}
      </div>

      {/* Modal renders only when selectedMovie has data */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
}
