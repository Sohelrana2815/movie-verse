import { useEffect } from "react";

export default function MovieModal({ movie, onClose }) {
  // Lock body scroll and listen for Escape key when modal mounts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!movie) return null;

  const IMAGE_BASE = "https://image.tmdb.org/t/p";
  const backdropUrl = movie.backdrop_path
    ? `${IMAGE_BASE}/w1280${movie.backdrop_path}`
    : "https://via.placeholder.com/1280x720?text=No+Backdrop+Available";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Container - stopPropagation prevents closing when clicking inside */}
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-gray-900 text-white shadow-2xl ring-1 ring-gray-700/50 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-gray-300 transition hover:bg-red-600 hover:text-white"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header / Backdrop Image */}
        <div className="relative h-64 w-full sm:h-80 shrink-0">
          <img
            src={backdropUrl}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
          {/* Gradient overlay to seamlessly blend image into content */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
        </div>

        {/* Content Area - Scrollable */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <h2 className="text-3xl font-bold sm:text-4xl">{movie.title}</h2>

          <div className="my-4 flex flex-wrap items-center gap-4 text-sm font-medium text-gray-300">
            <span className="flex items-center gap-1 text-yellow-400">
              ⭐ {movie.vote_average?.toFixed(1)}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-600"></span>
            <span>📅 {movie.release_date?.split("-")[0] || "Unknown"}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-600"></span>
            <span className="uppercase text-gray-400">
              {movie.original_language}
            </span>
            {movie.adult && (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-gray-600"></span>
                <span className="rounded border border-red-500 px-1 text-xs text-red-500">
                  18+
                </span>
              </>
            )}
          </div>

          <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-200">
              Overview
            </h3>
            <p className="leading-relaxed text-gray-400">
              {movie.overview || "No description available for this movie."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-8 w-full rounded-xl bg-gray-800 py-3 font-semibold text-white transition hover:bg-gray-700 sm:w-auto sm:px-8"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
