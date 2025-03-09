import React from "react";
import IMovie from "../types/Movie";
import MovieCard from "./MovieCard";
import '../assets/styles/WishWatchList.css';

interface WishListProps {
    movie: IMovie[];
    toggleWishList: (id: number) => void;
    toggleWatchList: (id: number) => void;
}

const WatchList: React.FC<WishListProps> = ({movie,toggleWatchList,toggleWishList}) => {
    const watchedMovies = movie.filter((movie:IMovie)=>movie.watched);

    return(
        <div className="watch-list">
           <div className="list-header">
            <h2>Watched Movies</h2>
            <span className="list-count">{watchedMovies.length}</span>
          </div>
            {watchedMovies.length > 0 ? (
                <div className="list-grid">
                {watchedMovies.map((movie: IMovie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    toggleWishList={toggleWishList}
                    toggleWatchList={toggleWatchList}
                  />
                ))}
              </div>
            ) : (
                <p className="empty-list">
                  <div className="empty-list-icon">✓</div>
                  <p>No watched movies yet</p>
                  <p>Mark movies as watched to track them here</p>
                </p>
            )}
        </div>
    )
}
export default WatchList;