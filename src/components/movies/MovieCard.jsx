export default function MovieCard({ movie }) {
  return (
    <article>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />

      <h2>{movie.title}</h2>

      <p>Rating: {movie.vote_average}</p>

      <p>{movie.release_date}</p>
    </article>
  );
}
