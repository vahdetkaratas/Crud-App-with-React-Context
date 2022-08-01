import React from "react";
import "./App.css";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";

function App() {
  return (
    /* Sarmaladığımız bu provider yapısı,içerisinde bulunan tüm elementlere,sakladığı verilere ulaşma imkanı sağlar.Bu örnekte 2 componente veriye ulaşma şansı verdik */
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
