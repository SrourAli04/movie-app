import IMovie from "../types/Movie";
import React from "react";
import '../assets/styles/MovieCard.css';

type MovieCardProps = {
    movie: IMovie;
    toggleWishList: (id: number) => void;
    toggleWatchList: (id: number) => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie,toggleWishList,toggleWatchList }) => {

    const handleToggleWishList = () => {
        toggleWishList(movie.id);
    }
    const handleToggleWatchList = () => {
        toggleWatchList(movie.id);
    }
    


    return (
        <div className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Released: {new Date(movie.release_date).toLocaleDateString()}</p>
                <div className="rating">★ {movie.rating.toFixed(1)}</div>
                <div className="actions">
                    <button 
                        className={movie.watched ? 'active-watch' : ''}
                        onClick={handleToggleWatchList}
                    >
                        {movie.watched ? "Remove from Watched" : "Mark as Watched"}
                    </button>
                    <button 
                         className={movie.inWishList ? 'active-wish' : ''}
                        onClick={handleToggleWishList}
                    >
                        {movie.inWishList?"Remove from Wishlist":"Add to WishList"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;