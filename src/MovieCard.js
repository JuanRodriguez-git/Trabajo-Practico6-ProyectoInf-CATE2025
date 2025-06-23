import React, { useState } from 'react';

function MovieCard({ movie }) {
  const [score, setScore] = useState('');

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=Sin+imagen';

  return (
    <div style={{ width: '200px', textAlign: 'center' }}>
      <img src={imageUrl} alt={movie.title} style={{ width: '100%' }} />
      <h3>{movie.title}</h3>
      <input
        type="number"
        placeholder="Tu puntuación"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        style={{ width: '100%', padding: '5px', marginTop: '5px' }}
      />
    </div>
  );
}

export default MovieCard;
