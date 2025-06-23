import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results || []);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Buscador de Películas</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
