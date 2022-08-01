import React, { useState, createContext } from "react";

export const MovieContext = createContext();

// Kullanacağımız veriler için Context component i oluşturuyoruz.CreateContext i import ettik ve gerekli tanımlamayı yaptık

export const MovieProvider = (props) => {
  // Daha sonra kullanılacak olan verileri tuttuğumuz yer

  const [movies, setMovies] = useState([
    // Örnek veriler...
    { name: "Hababam Sınıfı", price: "10", id: "1" },
    { name: "Neşeli Günler", price: "20", id: "2" },
    { name: "Tosun Paşa", price: "30", id: "3" },
  ]);

  return (
    // Bu yapı ile elimizde tuttuğumuz verileri tüm child elementlere açmış oluyoruz.Tabi çağırılması kaydıyla.

    /*      <MovieContext.Provider value={'Hello'}>  Basit bir string verisi gönderildi.Şimdi obje olan daha complex bir veri gönderiyoruz.
     */

    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}

      {/*      <Nav/>
        <MovieList/> */}
    </MovieContext.Provider>
  );
};
