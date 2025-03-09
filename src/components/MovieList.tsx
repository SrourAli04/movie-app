import React from "react";
import IMovie from "../types/Movie";
import MovieCard from "./MovieCard";
import '../assets/styles/MovieList.css';

type MovieListProps ={
    movies:IMovie[];
    toggleWishList:(id:number)=>void;
    toggleWatchList:(id:number)=>void;
}

const MovieList:React.FC<MovieListProps> = ({movies,toggleWishList,toggleWatchList}) => {
    return (
        <div className="movie-list">
            {movies.map((movie: IMovie) => (
            <MovieCard 
                key={movie.id} 
                movie={movie}
                toggleWishList={toggleWishList} 
                toggleWatchList={toggleWatchList}
            />
            ))}
        </div>
    )
}

export default MovieList;