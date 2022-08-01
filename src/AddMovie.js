import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [movies,setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        name="name"
        placeholder="Film İsmi"
        value={name}
        onChange={updateName}
      />
      <input
        type="number"
        name="price"
        placeholder="Film Fiyatı"
        value={price}
        onChange={updatePrice}
      />

      <button>Film Ekle</button>
    </form>
  );
};

export default AddMovie;
