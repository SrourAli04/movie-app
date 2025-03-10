import React from "react";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
};

const SearchBar:React.FC<SearchBarProps> = ({onSearch}) => {
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    }
    return (
        <div className="search-bar">
            <input 
                type="text"
                placeholder="Search movies..."
                onChange={handleInput}
                className="search-input" 
            />
        </div>
    );
}

export default SearchBar;
