export default function MovieCard({ movie, onSeeDetails }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-xl bg-gray-800 border border-gray-700/50 shadow-lg">
      <div>
        <img
          src={posterUrl}
          alt={movie.title}
          className="h-80 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg text-white truncate">
            {movie.title}
          </h3>
          <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
            <span>⭐ {movie.vote_average?.toFixed(1) || "N/A"}</span>
            <span>📅 {movie.release_date?.split("-")[0] || "N/A"}</span>
          </div>
        </div>
      </div>

      {/* Button container */}
      <div className="p-4 pt-0">
        <button
          onClick={() => onSeeDetails(movie)}
          className="w-full rounded-lg bg-red-600 py-2 text-sm font-semibold text-white transition hover:bg-red-700 cursor-pointer"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
