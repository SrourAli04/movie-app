import './App.css';
import { useState } from 'react';
import IMovie from './types/Movie'
import MovieList from './components/MovieList';
import WishList from './components/WishList';
import WatchList from './components/WatchList';
import SearchBar from './components/SearchBar';

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
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ",
      watched: false,
      inWishList: false
    },
    {
      id: 3,
      title: "The Dark Knight",
      release_date: "2008-07-16",
      rating: 9.0,
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
      watched: false,
      inWishList: false
    },
    {
      id: 4,
      title:
        "The Lord of the Rings: The Return of the King",
      release_date: "2003-12-01",
      rating: 8.9,
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQc9TF2jMcUd4xoSyvFS1be_J9C1jHLjm4FTAqmBJs9jcBLzOJoSvylFlc5zMbVnh0LofggQ",
      watched: false,
      inWishList: false
    },
    {
      id: 5,
      title: "San Andreas",
      release_date: "2015-05-28",
      rating: 8.9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/38/San_Andreas_poster.jpg",
      watched: false,
      inWishList: false
    }
  ]);

  const [searchTerm,setSearchTerm] = useState<string>('');

  const toggleWishList = (id:number)=>{
    setMovies((prevMovies)=> prevMovies.map((movie)=>movie.id === id ? {...movie,inWishList:!movie.inWishList}:movie
    ));
  }
  const toggleWatchList = (id:number)=>{
    setMovies((prevMovies)=> prevMovies.map((movie)=>movie.id === id ? {...movie,watched:!movie.watched}:movie
    ));
  }

  const handleSearch = (searchTerm:string)=>{
    setSearchTerm(searchTerm);
  }

  const filteredMovies = movies.filter((movie)=> movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1>Movie App V1.0</h1>
      </header>

      <div className="search-bar">
        <SearchBar onSearch={handleSearch}/>
      </div>

      <div className="section">
        <div className="movie-list-header">
          <h2>Discover Movies</h2>
        </div>
        <MovieList 
          movies={filteredMovies} 
          toggleWishList={toggleWishList} 
          toggleWatchList={toggleWatchList}/>
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
