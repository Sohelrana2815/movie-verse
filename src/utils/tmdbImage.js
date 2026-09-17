const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const getTmdbImageUrl = (path, size = "w500") => {
  if (!path) {
    return "/placeholder-movie.jpg";
  }

  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};
