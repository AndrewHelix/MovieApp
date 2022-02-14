import React from "react";
import {Movie} from './Movie'

function Movies(props) {
  const {movies = []} = props;

  return <div className="movies" >
    {movies.length ? movies.map(movie => <Movie movie={movie} key={movie.imdbID}/>) : <h3>Movies doesn't search</h3>}
  </div>;
}

export {Movies}