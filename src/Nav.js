import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div>
      <h3>Simple Context Api</h3>
      <h3>Filmler </h3>
      <p>Film Sayısı : {movies.length} </p>
    </div>
  );
};

export default Nav;
