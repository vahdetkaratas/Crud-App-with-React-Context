import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  //const value = useContext(MovieContext)
  const [movies] = useContext(MovieContext);

  // Bu component içerisinde,başka component e ait bir veriye ulaşmak istiyorum...
  /*     Erişmek istediğimiz verileri Context componentinde saklamıştık.Şimdi bu component içerisinde kullanmak istiyoruz.
O halde useContext import edilir ve gerekli tanımlama yapılır.

 */

  /* const [movies,setMovies] = useState([            Bu kısım state management-context api yapısına girmeden basit anlamda,props kullanılarak 
                                                    componentler arası veri alışverişi için kullanıldı

    {name : 'Hababam Sınıfı',price: '10 TL',id : '1'},
    {name : 'Neşeli Günler',price: '20 TL',id : '2'},
    {name : 'Gülşah',price: '30 TL',id : '3'}


]); */

  return (
    <div>
      {/*   <h1>{value}</h1>      Bu değer Context Component de tanımlanmış.Daha doğrusu gönderilmiş. */}

      {movies.map((movie) => (
        <Movie
          name={movie.name}
          price={movie.price}
          key={movie.id}
        /> /*  Verilere map ile ulaşma */
      ))}
    </div>
  );
};

export default MovieList;
