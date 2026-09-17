const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const READ_API_TOKEN = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;

export const fetchPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?language=en-US&page=1`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${READ_API_TOKEN}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.status}`);
  }

  return res.json();
};
