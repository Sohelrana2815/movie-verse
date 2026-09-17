# 🎬 Movie Verse

Movie Verse is a responsive movie discovery application built with **React** and **Vite**. Users can explore movies, search for specific titles, and view detailed information about each movie.

## ✨ Features

* Browse popular movies
* Search movies by title
* Responsive movie card grid
* View movie details in a modal
* Movie ratings and release dates
* Responsive design for mobile and desktop
* TMDB API integration

## 🛠️ Technologies

* React
* Vite
* JavaScript
* Tailwind CSS
* TMDB API

## 🚀 Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
```

Install dependencies:

```bash
pnpm install
```

Create a `.env` file and add your TMDB API configuration:

```env
VITE_TMDB_BASE_URL=your_tmdb_base_url
VITE_TMDB_API_READ_ACCESS_TOKEN=your_tmdb_read_access_token
```

Start the development server:

```bash
pnpm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 📂 Project Structure

```text
src/
├── components/
├── pages/
├── services/
├── utils/
├── router/
├── App.jsx
└── main.jsx
```

## 🌐 API

Movie data is provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

## 📄 License

This project was created for educational purposes.
