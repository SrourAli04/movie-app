import React from "react";
import IMovie from "../types/Movie";
import MovieCard from "./MovieCard";
import '../assets/styles/WishWatchList.css';

interface WishListProps {
    movie: IMovie[];
    toggleWishList: (id: number) => void;
    toggleWatchList: (id: number) => void;
}


const WishList: React.FC<WishListProps> = ({movie,toggleWishList,toggleWatchList}) => {
    const wishlist = movie.filter((movie: IMovie) => movie.inWishList);
    return (
        <div className="wish-list">
            <div className="list-header">
              <h2>My Wishlist</h2>
              <span className="list-count">{wishlist.length}</span>
            </div>
            {wishlist.length > 0 ?
            <div className="list-grid">
            {wishlist.map((movie: IMovie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                toggleWishList={toggleWishList}
                toggleWatchList={toggleWatchList}
              />
            ))}
          </div>
            :
            <p className="empty-list">
                <div className="empty-list-icon">★</div>
                <p>Your wishlist is empty</p>
                <p>Add movies you want to watch later</p>
            </p>
            }
        </div>
    )
}

export default WishList;