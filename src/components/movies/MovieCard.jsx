import { getTmdbImageUrl } from "../../utils/tmdbImage";

export default function MovieCard({ movie }) {
  return (
    <article>
      <img
        src={getTmdbImageUrl(movie.poster_path, "original")}
        alt={movie.title}
      />

      <h2>{movie.title}</h2>

      <p>⭐ {movie.vote_average.toFixed(1)}</p>

      <p>{movie.release_date}</p>

      <button type="button">See Details</button>
    </article>
  );
}
