import React from "react";
import { movies } from "../data";

function Movies() {

  const movieItems = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <h2>Length: {movie.time} minutes</h2>
      <ul>
        {movie.genres.map((genre) =>(
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {movieItems}
    </div>
  );
}

export default Movies;
