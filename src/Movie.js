import React from "react";

const Movie = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{price} TL</h3>
    </div>
  );
};

export default Movie;
