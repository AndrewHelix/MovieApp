import React from "react";

function Movie(props) {
  const { Poster, Title, Type, Year } = props.movie;
  
  return (
    <div className="movie card">
      <div className="card-image">
        <img src={Poster} />
      </div>
      
      <div className="card-content">
        <span className="card-title">{Title}</span>
        <p>{Type} <span className="right">{Year}</span></p>
      </div>
    </div>
  );
}

export { Movie };
