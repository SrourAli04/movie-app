import './App.css';
import { useState } from 'react';
import IMovie from './types/Movie'
import MovieList from './components/MovieList';
import WishList from './components/WishList';
import WatchList from './components/WatchList';

function App() {
  const [movies,setMovies]= useState<IMovie[]>([
    {
      id: 1,
      title: "The Shawshank Redemption",
      release_date: "1994-09-10",
      rating: 9.3,
      imageUrl: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      watched: false,
      inWishList: false
    },
    {
      id: 2,
      title: "The Godfather",
      release_date: "1972-03-14",
      rating: 9.2,
      imageUrl: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      watched: false,
      inWishList: false
    },
    {
      id: 3,
      title: "The Dark Knight",
      release_date: "2008-07-16",
      rating: 9.0,
      imageUrl: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      watched: false,
      inWishList: false
    },
    {
      id: 4,
      title:
        "The Lord of the Rings: The Return of the King",
      release_date: "2003-12-01",
      rating: 8.9,
      imageUrl: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      watched: false,
      inWishList: false
    },
    {
      id: 5,
      title: "Pulp Fiction",
      release_date: "1994-09-10",
      rating: 8.9,
      imageUrl: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      watched: false,
      inWishList: false
    }
  ]);

  const toggleWishList = (id:number)=>{
    setMovies((prevMovies)=> prevMovies.map((movie)=>movie.id === id ? {...movie,inWishList:!movie.inWishList}:movie
    ));
  }
  const toggleWatchList = (id:number)=>{
    setMovies((prevMovies)=> prevMovies.map((movie)=>movie.id === id ? {...movie,watched:!movie.watched}:movie
    ));
  }

  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1>Movie App V1.0</h1>
      </header>

      <div className="section">
        <div className="movie-list-header">
          <h2>Discover Movies</h2>
        </div>
        <MovieList movies={movies} toggleWishList={toggleWishList} toggleWatchList={toggleWatchList}/>
      </div>
      

      <div className="lists-container">
        <div className="section wish-list">
          <WishList 
            movie={movies}
            toggleWishList={toggleWishList}
            toggleWatchList={toggleWatchList}
            />
        </div>
        
        <div className="section watch-list">
          <WatchList 
            movie={movies}
            toggleWatchList={toggleWatchList}
            toggleWishList={toggleWishList}
          />
        </div>
      </div>
    </div>
  )
}


export default App
